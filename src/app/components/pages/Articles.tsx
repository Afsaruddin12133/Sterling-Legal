import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, ChevronRight } from "lucide-react";

export function Articles() {
  const featuredArticle = {
    id: "understanding-corporate-law",
    title: "Understanding Corporate Law: A Comprehensive Guide for Business Owners",
    excerpt: "Navigate the complexities of corporate law with our expert insights on compliance, governance, and strategic legal planning for your business.",
    image: "https://images.unsplash.com/photo-1762417691650-f2e4bcca7eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTg0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Michael Sterling",
    date: "April 5, 2026",
    category: "Corporate Law",
  };

  const articles = [
    {
      id: "family-law-essentials",
      title: "Family Law Essentials: Protecting Your Rights During Divorce",
      excerpt: "Learn about your rights and options when navigating divorce proceedings, from asset division to custody arrangements.",
      image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Sarah Chen",
      date: "March 28, 2026",
      category: "Family Law",
    },
    {
      id: "immigration-visa-guide",
      title: "Immigration Visa Guide: Steps to Successful Application",
      excerpt: "A detailed walkthrough of the visa application process, common pitfalls, and how to maximize your chances of approval.",
      image: "https://images.unsplash.com/photo-1758518727077-ffb66ffccced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "David Martinez",
      date: "March 20, 2026",
      category: "Immigration",
    },
    {
      id: "estate-planning-basics",
      title: "Estate Planning Basics: Securing Your Family's Future",
      excerpt: "Essential estate planning strategies to protect your assets and ensure your wishes are honored.",
      image: "https://images.unsplash.com/photo-1775144657610-9a6f171e522f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTg0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Emily Roberts",
      date: "March 15, 2026",
      category: "Estate Planning",
    },
    {
      id: "contract-negotiations",
      title: "The Art of Contract Negotiations: Tips from Legal Experts",
      excerpt: "Master the fundamentals of contract negotiation with insights from experienced legal professionals.",
      image: "https://images.unsplash.com/photo-1758518729706-b1810dd39cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Michael Sterling",
      date: "March 10, 2026",
      category: "Legal Advisory",
    },
    {
      id: "intellectual-property",
      title: "Protecting Your Intellectual Property in the Digital Age",
      excerpt: "Understand the importance of IP protection and how to safeguard your creative and innovative assets.",
      image: "https://images.unsplash.com/photo-1646453628191-157ca337a987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTg0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Sarah Chen",
      date: "March 5, 2026",
      category: "Corporate Law",
    },
    {
      id: "litigation-strategies",
      title: "Litigation Strategies: When to Settle vs. When to Fight",
      excerpt: "Strategic insights on evaluating litigation options and making informed decisions for your case.",
      image: "https://images.unsplash.com/photo-1758518729161-7b2fc86b6c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1ODQxMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "David Martinez",
      date: "February 28, 2026",
      category: "Litigation",
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
              Legal Insights & Articles
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert analysis, practical advice, and the latest updates in law from our team of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/articles/${featuredArticle.id}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[var(--gold)] text-[var(--navy)] rounded">
                    Featured
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-[var(--secondary)] text-[var(--navy)] rounded">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                  </div>

                  <h2
                    className="text-4xl text-[var(--navy)] mb-4 group-hover:text-[var(--gold)] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {featuredArticle.title}
                  </h2>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors" style={{ fontWeight: 500 }}>
                      Read Article
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="text-4xl text-[var(--navy)] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Recent Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/articles/${article.id}`} className="group block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                      <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--navy)] rounded">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>

                    <h3
                      className="text-xl text-[var(--navy)] mb-3 group-hover:text-[var(--gold)] transition-colors"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{article.author}</span>
                      <span className="inline-flex items-center gap-1 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors text-sm" style={{ fontWeight: 500 }}>
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
