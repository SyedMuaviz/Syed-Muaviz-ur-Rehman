import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, BarChart3, Cpu, Database, Coffee, Terminal, Layers } from 'lucide-react';
import { SKILLS } from '../constants';

const IconMap: Record<string, any> = {
  'code-2': Code2,
  'brain': Brain,
  'bar-chart-3': BarChart3,
  'cpu': Cpu,
  'database': Database,
  'coffee': Coffee,
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Technical <span className="italic font-serif text-primary">Prowess</span></h3>
          <p className="text-zinc-300 font-light">
            A comprehensive stack built on analytical thinking and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => {
            const Icon = IconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-zinc-900 border border-white/5 rounded-3xl group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{skill.name.substring(0, 3)}</span>
                </div>
                
                <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wider">{skill.name}</h4>
                
                <div className="space-y-4">
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional quick tools marquee-like feel */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-10">Tools & Technologies I use</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            {['Git', 'Docker', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'AWS'].map(tool => (
              <span key={tool} className="text-lg font-display font-bold">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
