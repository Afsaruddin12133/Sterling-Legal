import { motion } from "motion/react";
import { Scale, Users, Shield, Award, Building2, Heart, Briefcase, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Comprehensive legal support for businesses navigating complex corporate matters, mergers, acquisitions, and compliance.",
      features: [
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Contract Negotiation",
        "Regulatory Compliance",
      ],
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate guidance through family legal matters with expertise, discretion, and a focus on your well-being.",
      features: [
        "Divorce & Separation",
        "Child Custody",
        "Prenuptial Agreements",
        "Adoption Services",
      ],
    },
    {
      icon: Shield,
      title: "Immigration Law",
      description: "Expert assistance navigating complex immigration processes, from visas to citizenship applications.",
      features: [
        "Visa Applications",
        "Green Card Processing",
        "Citizenship Services",
        "Deportation Defense",
      ],
    },
    {
      icon: Briefcase,
      title: "Legal Advisory",
      description: "Strategic legal counsel tailored to your unique circumstances, helping you make informed decisions.",
      features: [
        "Legal Strategy",
        "Risk Assessment",
        "Contract Review",
        "Dispute Resolution",
      ],
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Protect your assets and secure your family's future with comprehensive estate planning services.",
      features: [
        "Wills & Trusts",
        "Estate Administration",
        "Tax Planning",
        "Asset Protection",
      ],
    },
    {
      icon: Scale,
      title: "Litigation",
      description: "Aggressive representation in court with a proven track record of successful outcomes.",
      features: [
        "Civil Litigation",
        "Commercial Disputes",
        "Appellate Practice",
        "Alternative Dispute Resolution",
      ],
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive legal solutions across multiple practice areas, delivered by experienced professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 bg-white border border-[var(--border)] rounded-lg hover:shadow-2xl transition-all hover:border-[var(--gold)]"
                >
                  <div className="w-16 h-16 bg-[var(--navy)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                    <Icon className="w-8 h-8 text-white group-hover:text-[var(--navy)]" />
                  </div>

                  <h3
                    className="text-2xl text-[var(--navy)] mb-4"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              className="text-4xl md:text-5xl text-[var(--navy)] mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to help. Schedule a consultation to discuss your legal needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--navy)] text-white rounded hover:bg-[var(--navy-light)] transition-all hover:shadow-xl"
              style={{ fontWeight: 600 }}
            >
              Book a Consultation
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
