import { Link, useLocation } from "react-router";
import { Scale } from "lucide-react";
import { motion } from "motion/react";

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
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[var(--navy)] rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <Scale className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <span className="text-xl" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--navy)' }}>
              Sterling Legal
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative py-2 transition-colors"
                style={{
                  color: location.pathname === link.to ? 'var(--navy)' : '#6c757d',
                  fontWeight: location.pathname === link.to ? 500 : 400,
                }}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)]"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:block px-6 py-3 bg-[var(--navy)] text-white rounded transition-all hover:bg-[var(--navy-light)] hover:shadow-lg"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
