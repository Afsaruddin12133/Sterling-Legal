import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, ChevronLeft, MessageCircle, Send } from "lucide-react";

export function ArticleDetail() {
  const article = {
    title: "Understanding Corporate Law: A Comprehensive Guide for Business Owners",
    author: "Michael Sterling",
    date: "April 5, 2026",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1762417691650-f2e4bcca7eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXJzJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTg0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  };

  const comments = [
    {
      id: 1,
      author: "Jennifer Thompson",
      date: "April 6, 2026",
      content: "Excellent overview of corporate law fundamentals. This guide helped me understand the compliance requirements for my startup. Thank you!",
    },
    {
      id: 2,
      author: "Robert Kim",
      date: "April 7, 2026",
      content: "Very informative article. The section on corporate governance was particularly helpful for our board meetings.",
    },
    {
      id: 3,
      author: "Lisa Anderson",
      date: "April 8, 2026",
      content: "As a business owner, I found this incredibly useful. Would love to see more articles on M&A strategies.",
    },
  ];

  return (
    <div>
      {/* Back Navigation */}
      <section className="py-6 bg-white border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="px-3 py-1 bg-[var(--secondary)] text-[var(--navy)] rounded">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl text-[var(--navy)] mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Corporate law forms the foundation of modern business operations, governing everything from company formation to mergers and acquisitions. Understanding these legal frameworks is essential for any business owner navigating today's complex commercial landscape.
            </p>

            <h2
              className="text-3xl text-[var(--navy)] mt-12 mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              What is Corporate Law?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Corporate law encompasses the legal framework that governs the formation, operation, and dissolution of corporations. It addresses the rights and obligations of all stakeholders, including shareholders, directors, employees, and creditors. This body of law ensures that businesses operate within legal boundaries while protecting the interests of all parties involved.
            </p>

            <h2
              className="text-3xl text-[var(--navy)] mt-12 mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Key Areas of Corporate Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Corporate Governance:</strong> The system of rules, practices, and processes by which a company is directed and controlled. Good governance balances the interests of stakeholders and ensures accountability and transparency in business operations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Compliance and Regulatory Requirements:</strong> Businesses must navigate a complex web of federal, state, and local regulations. Compliance ensures your company operates legally and avoids costly penalties or legal disputes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Mergers and Acquisitions:</strong> M&A transactions involve intricate legal considerations, from due diligence to contract negotiation. Expert legal counsel is crucial to protecting your interests throughout the process.
            </p>

            <h2
              className="text-3xl text-[var(--navy)] mt-12 mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Why Legal Counsel Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Engaging experienced corporate law attorneys early in your business journey can prevent costly mistakes and position your company for long-term success. From drafting shareholder agreements to negotiating complex contracts, professional legal guidance is an investment in your company's future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Sterling Legal, we provide comprehensive corporate law services tailored to businesses of all sizes. Our team stays current with evolving regulations and industry best practices to deliver strategic counsel that drives results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 bg-white rounded-lg"
          >
            <h3
              className="text-3xl text-[var(--navy)] mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest legal insights delivered to your inbox every month.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--secondary)] rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              />
              <button className="px-6 py-3 bg-[var(--navy)] text-white rounded hover:bg-[var(--navy-light)] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-3xl text-[var(--navy)] mb-8 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              <MessageCircle className="w-8 h-8" />
              Comments ({comments.length})
            </h3>

            {/* Comment Form */}
            <div className="mb-12 p-6 bg-[var(--secondary)] rounded-lg">
              <h4 className="text-xl text-[var(--navy)] mb-4" style={{ fontWeight: 600 }}>
                Leave a Comment
              </h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
                <textarea
                  placeholder="Your Comment"
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] resize-none"
                />
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white rounded hover:bg-[var(--navy-light)] transition-colors">
                  <Send className="w-4 h-4" />
                  Post Comment
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-[var(--secondary)] rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] flex-shrink-0" style={{ fontWeight: 600 }}>
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[var(--navy)]" style={{ fontWeight: 600 }}>
                          {comment.author}
                        </span>
                        <span className="text-sm text-gray-600">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
