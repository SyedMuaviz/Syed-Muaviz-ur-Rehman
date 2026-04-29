import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Star, CheckCircle2, Trophy } from 'lucide-react';
import { EXPERIENCE, ACTIVITIES, CERTIFICATIONS } from '../constants';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary/10 to-transparent" />
      <div className="container-custom">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          
          {/* Experience & Leadership */}
          <div>
            <div className="mb-12">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Background</h2>
              <h3 className="text-4xl font-display font-medium text-white mb-4">Professional <span className="text-primary italic">&</span> Leadership</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900 border border-primary/20 rounded-2xl group hover:border-primary/50 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] px-2.5 py-1 bg-primary/10 rounded-full">
                      {exp.period}
                    </span>
                    <Briefcase size={16} className="text-primary opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-base font-display font-bold text-zinc-100 uppercase tracking-wider mb-1">{exp.role}</h4>
                  <p className="text-zinc-500 text-[10px] font-medium mb-4 uppercase tracking-[0.1em]">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2.5 text-[10.5px] text-zinc-400 leading-relaxed font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {ACTIVITIES.map((act, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900 border border-cyan-500/10 rounded-2xl group hover:border-cyan-500/30 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] px-2.5 py-1 bg-zinc-800 rounded-full">
                      Leadership
                    </span>
                    <Users size={16} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="text-base font-display font-bold text-zinc-100 uppercase tracking-wider mb-1">{act.role}</h4>
                  <p className="text-primary text-[10px] mb-3 italic uppercase tracking-[0.1em]">{act.organization}</p>
                  <p className="text-[10.5px] text-zinc-500 leading-relaxed font-light">
                    {act.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="xl:pt-24">
            <h3 className="text-2xl font-display font-medium text-white mb-8 flex items-center gap-3">
              <Trophy className="text-primary" /> Honors & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-zinc-900 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Star size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg mb-1 text-white">{cert.name}</h4>
                  <p className="text-xs text-zinc-400 mb-2">{cert.issuer}</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                    Issued {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* "Currently Building" Section */}
            <div className="mt-16 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
               </div>
               <h4 className="text-xl font-display font-bold mb-2">Currently Building</h4>
               <p className="text-sm text-zinc-300 mb-4 font-medium">
                 Implementing a Federated Learning architecture for privacy-preserving medical image analysis.
               </p>
               <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ duration: 2 }}
                    className="h-full bg-primary"
                 />
               </div>
               <p className="mt-2 text-[10px] font-bold uppercase text-primary text-right">65% Completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
