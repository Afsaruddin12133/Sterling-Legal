import { Link } from "react-router";
import { motion } from "motion/react";
import { Scale, Shield, Users, Award, Star, ChevronRight } from "lucide-react";

export function Home() {
  const services = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Comprehensive legal support for businesses of all sizes, from startups to enterprises.",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate guidance through family matters with expertise and discretion.",
    },
    {
      icon: Shield,
      title: "Immigration",
      description: "Navigate complex immigration processes with experienced legal counsel.",
    },
    {
      icon: Award,
      title: "Legal Advisory",
      description: "Strategic legal advice tailored to your unique circumstances and goals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechVenture Inc.",
      content: "Sterling Legal provided exceptional guidance during our merger. Their attention to detail and strategic thinking made all the difference.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Private Client",
      content: "The team handled my immigration case with professionalism and care. I couldn't have asked for better representation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      content: "Outstanding service from start to finish. They truly understand the needs of growing businesses.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-[var(--navy)]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1748050869060-c8d7a93bff71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTg0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional legal office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/95 to-[var(--navy)]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Trusted Legal Solutions for Individuals & Businesses
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expert legal counsel with over 30 years of experience delivering results that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] rounded hover:bg-[var(--gold-light)] transition-all hover:shadow-2xl hover:scale-105"
                style={{ fontWeight: 600 }}
              >
                Book a Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-[var(--navy)] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Our Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 bg-[var(--secondary)] rounded-lg hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-[var(--navy)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                    <Icon className="w-7 h-7 text-white group-hover:text-[var(--navy)]" />
                  </div>
                  <h3
                    className="text-xl text-[var(--navy)] mb-3"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl md:text-5xl text-[var(--navy)] mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Why Choose Sterling Legal
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine decades of experience with a client-first approach to deliver exceptional legal outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                      30+ Years Experience
                    </h3>
                    <p className="text-gray-600">
                      Proven track record of successful outcomes across diverse practice areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                      Client-Focused
                    </h3>
                    <p className="text-gray-600">
                      Your goals are our priority. We provide personalized attention to every case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Specialized attorneys with deep expertise in their respective fields.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional legal team"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-[var(--navy)] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-[var(--secondary)] rounded-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-[var(--navy)]" style={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation today and let us help you navigate your legal challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] rounded hover:bg-[var(--gold-light)] transition-all hover:shadow-2xl hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              Book Your Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
