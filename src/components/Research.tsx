import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import { RESEARCH } from '../constants';

export const Research = () => {
  return (
    <section id="research" className="section-padding bg-zinc-950 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Academic Contributions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-light mb-6">Research & <span className="italic font-serif text-primary">Publications</span></h3>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            Bridging the gap between theoretical computer science and practical AI applications through rigorous academic study and experimentation.
          </p>
        </div>

        <div className="space-y-8">
          {RESEARCH.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                  <BookOpen size={28} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h4 className="text-2xl md:text-3xl font-display font-bold leading-tight group-hover:text-primary transition-colors text-white">
                      {item.title}
                    </h4>
                    {item.doi && (
                      <a 
                        href={`https://doi.org/${item.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-white hover:text-black rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all border border-white/10"
                      >
                        DOI Link <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-400 font-medium mb-6 flex items-center gap-2 text-xs uppercase tracking-widest font-mono">
                    <span className="text-primary">{item.venue}</span>
                  </p>
                  
                  <div className="relative p-8 bg-zinc-950/50 rounded-2xl border-l border-primary/40">
                    <Quote className="absolute top-4 right-4 text-zinc-900" size={40} />
                    <p className="text-zinc-400 font-light leading-relaxed relative z-10 italic">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
