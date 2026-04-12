import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const existingScript = document.querySelector(
      "script[data-contact-widget]",
    ) as HTMLScriptElement | null;

    const initWidget = () => {
      const widgetApi = (
        window as typeof window & {
          ContactFormWidget?: {
            init: (config: { widgetId: string; mode: string }) => void;
          };
        }
      ).ContactFormWidget;

      if (widgetApi?.init) {
        widgetApi.init({
          widgetId: "f3645d0a-21a3-49f2-be03-e123bd21b00f",
          mode: "inline",
        });
      }
    };

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        initWidget();
      } else {
        existingScript.addEventListener("load", initWidget, { once: true });
      }
      return () => {
        existingScript.removeEventListener("load", initWidget);
      };
    }

    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@getwidgets/contact-widget@latest/dist/contact-widget.umd.js";
    script.async = true;
    script.dataset.contactWidget = "true";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      initWidget();
    });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initWidget);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className="text-5xl md:text-6xl text-secondary mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Contact Us
            </h1>
            <p className="text-xl text-secondary/90 leading-relaxed">
              Get in touch with our team to discuss your legal needs. We're here
              to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="min-h-[360px]" id="contactform-root"></div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-2xl text-primary mb-6"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-text-dark" />
                    </div>
                    <div>
                      <h4
                        className="text-primary mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        Office Address
                      </h4>
                      <p className="text-gray">
                        123 Legal Plaza, Suite 500
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-text-dark" />
                    </div>
                    <div>
                      <h4
                        className="text-primary mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        Phone
                      </h4>
                      <p className="text-gray">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-text-dark" />
                    </div>
                    <div>
                      <h4
                        className="text-primary mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        Email
                      </h4>
                      <p className="text-gray">info@sterlinglegal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-text-dark" />
                    </div>
                    <div>
                      <h4
                        className="text-primary mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        Business Hours
                      </h4>
                      <p className="text-gray">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-6 bg-primary rounded-lg">
                <h4
                  className="text-xl text-secondary mb-3"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  Need Immediate Assistance?
                </h4>
                <p className="text-secondary/90 mb-4">
                  Call us directly to speak with one of our legal professionals.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-block w-full text-center px-6 py-3 bg-accent text-black rounded hover:opacity-90 transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-3xl text-primary mb-8 text-center"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Find Us
            </h3>
            <div className="w-full h-[400px] bg-gray/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray mx-auto mb-4" />
                <p className="text-gray text-lg">Map Placeholder</p>
                <p className="text-gray text-sm">
                  123 Legal Plaza, Suite 500, New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
