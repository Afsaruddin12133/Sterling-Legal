import { Scale } from "lucide-react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/articles", label: "Articles" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-primary/95 text-secondary backdrop-blur-sm border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <span
              className="text-xl text-secondary"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Sterling Legal
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 transition-colors hover:text-secondary ${
                  location.pathname === link.to
                    ? "text-secondary font-medium"
                    : "text-secondary/80"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:block px-6 py-3 bg-accent text-black rounded transition-all hover:opacity-90 hover:shadow-lg"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
