import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our team to discuss your legal needs. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
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
              <div className="bg-white p-8 border border-[var(--border)] rounded-lg">
                <h2
                  className="text-3xl text-[var(--navy)] mb-6"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[var(--navy)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[var(--navy)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[var(--navy)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[var(--navy)] mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    >
                      <option>Select a service</option>
                      <option>Corporate Law</option>
                      <option>Family Law</option>
                      <option>Immigration Law</option>
                      <option>Legal Advisory</option>
                      <option>Estate Planning</option>
                      <option>Litigation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[var(--navy)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] resize-none"
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--navy)] text-white rounded hover:bg-[var(--navy-light)] transition-all hover:shadow-xl"
                    style={{ fontWeight: 600 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
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
                  className="text-2xl text-[var(--navy)] mb-6"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--navy)] mb-1" style={{ fontWeight: 600 }}>
                        Office Address
                      </h4>
                      <p className="text-gray-600">
                        123 Legal Plaza, Suite 500<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--navy)] mb-1" style={{ fontWeight: 600 }}>
                        Phone
                      </h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--navy)] mb-1" style={{ fontWeight: 600 }}>
                        Email
                      </h4>
                      <p className="text-gray-600">info@sterlinglegal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--navy)] mb-1" style={{ fontWeight: 600 }}>
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-6 bg-[var(--navy)] rounded-lg">
                <h4
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  Need Immediate Assistance?
                </h4>
                <p className="text-gray-300 mb-4">
                  Call us directly to speak with one of our legal professionals.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-block w-full text-center px-6 py-3 bg-[var(--gold)] text-[var(--navy)] rounded hover:bg-[var(--gold-light)] transition-colors"
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
      <section className="py-0 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-3xl text-[var(--navy)] mb-8 text-center"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Find Us
            </h3>
            <div className="w-full h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Map Placeholder</p>
                <p className="text-gray-500 text-sm">123 Legal Plaza, Suite 500, New York, NY 10001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
