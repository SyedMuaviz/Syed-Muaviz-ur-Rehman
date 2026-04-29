import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'The Future of Federated Learning in Healthcare',
    excerpt: 'Exploring how AI can learn from decentralized data without compromising patient privacy...',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    tags: ['AI', 'Healthcare', 'Privacy'],
  },
  {
    title: 'Optimizing Python for Large Scale Data Processing',
    excerpt: 'Techniques and libraries that can speed up your data pipelines by 10x using vectorized operations...',
    date: 'Sep 12, 2024',
    readTime: '8 min read',
    tags: ['Python', 'Performance', 'Data'],
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Latest Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-white">AI & Tech <span className="italic font-serif text-primary">Blog</span></h3>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All Posts <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-[9px] font-mono uppercase tracking-widest text-zinc-300 rounded">{tag}</span>
                ))}
              </div>
              <h4 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-zinc-300 font-light mb-8 line-clamp-2 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <button className="p-2 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
