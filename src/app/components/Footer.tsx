import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Scale,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <span
                className="text-xl"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                Sterling Legal
              </span>
            </div>
            <p className="text-sm text-secondary/80 leading-relaxed">
              Trusted legal solutions for individuals and businesses since 1995.
            </p>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Practice Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary/80">Corporate Law</li>
              <li className="text-secondary/80">Family Law</li>
              <li className="text-secondary/80">Immigration</li>
              <li className="text-secondary/80">Legal Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-secondary/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Legal Plaza, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-secondary/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@sterlinglegal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary/80">
            © 2026 Sterling Legal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
