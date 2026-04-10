import { motion } from "motion/react";
import { Award, Target, Eye, Users } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Michael Sterling",
      role: "Senior Partner, Corporate Law",
      image: "https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "JD, Harvard Law School • 25+ years experience",
    },
    {
      name: "Sarah Chen",
      role: "Partner, Family Law",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "JD, Yale Law School • 18+ years experience",
    },
    {
      name: "David Martinez",
      role: "Partner, Immigration Law",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "JD, Columbia Law School • 20+ years experience",
    },
    {
      name: "Emily Roberts",
      role: "Partner, Legal Advisory",
      image: "https://images.unsplash.com/photo-1758518731722-320023fb8e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "JD, Stanford Law School • 15+ years experience",
    },
  ];

  const achievements = [
    { number: "30+", label: "Years in Practice" },
    { number: "5,000+", label: "Cases Won" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Attorneys" },
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
              About Sterling Legal
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Delivering excellence in legal services since 1995, built on trust, expertise, and unwavering commitment to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Legal consultation"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl text-[var(--navy)] mb-6"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1995, Sterling Legal has grown from a small practice to one of the most respected law firms in the region. Our success is built on a simple philosophy: put clients first, deliver exceptional results, and maintain the highest ethical standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we serve individuals, families, and businesses across multiple practice areas, bringing deep expertise and personalized attention to every case. Our team of seasoned attorneys is dedicated to achieving the best possible outcomes for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 bg-white rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-[var(--gold)] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[var(--navy)]" />
              </div>
              <h2
                className="text-3xl text-[var(--navy)] mb-4"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide exceptional legal services that protect our clients' interests and empower them to achieve their goals, while maintaining the highest standards of professional excellence and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 bg-white rounded-lg shadow-lg"
            >
              <div className="w-14 h-14 bg-[var(--gold)] rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[var(--navy)]" />
              </div>
              <h2
                className="text-3xl text-[var(--navy)] mb-4"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              >
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted and respected law firm in our community, recognized for our expertise, client dedication, and positive impact on the lives we touch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Proven Track Record
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-5xl md:text-6xl text-[var(--gold)] mb-3"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced attorneys leading Sterling Legal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-xl text-[var(--navy)] mb-1"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                >
                  {member.name}
                </h3>
                <p className="text-[var(--gold)] mb-2" style={{ fontWeight: 500 }}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.credentials}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
