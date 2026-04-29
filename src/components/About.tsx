import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../constants';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight">
              Driven by Curiosity, <br />Powered by <span className="italic font-serif text-primary">Intelligence</span>
            </h3>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed font-light">
              {PERSONAL_INFO.summary}
            </p>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex gap-4 p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium uppercase tracking-widest">{edu.institution} | {edu.period}</p>
                    <div className="mt-3 text-zinc-500 flex items-center gap-2">
                      <Award size={16} className="text-accent" />
                      <span className="text-xs font-bold uppercase tracking-tighter text-zinc-400">Merit Score: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all opacity-40 -z-10" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
                <img 
                  src="/Muaviz.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex items-end p-8 md:p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-display font-medium text-2xl md:text-3xl mb-1">{PERSONAL_INFO.name}</p>
                    <p className="text-primary font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em]">{PERSONAL_INFO.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
