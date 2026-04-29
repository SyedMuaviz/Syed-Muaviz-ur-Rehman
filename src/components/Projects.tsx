import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Filter, X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export const Projects = () => {
  const [filter, setFilter] = useState<'All' | Project['category']>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | Project['category'])[] = ['All', 'AI', 'Data Science', 'IoT'];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Featured <span className="italic font-serif text-primary">Research & Dev</span></h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 p-1 bg-zinc-900/40 border border-white/5 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-zinc-800 text-primary shadow-lg' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-6 hover:border-primary/50 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-12 w-full flex items-center justify-between px-6 bg-zinc-800/30 rounded-2xl mb-6 border border-white/5 group-hover:border-primary/20 transition-all">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{project.id}.SH</span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{project.category}</span>
                    <span className="text-[10px] font-mono text-zinc-600">RESEARCH_PHASE_01</span>
                  </div>
                  <h4 className="text-2xl font-display font-medium text-white mb-2">{project.title}</h4>
                  <p className="text-zinc-400 text-sm line-clamp-2 mb-6 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] px-2 py-0.5 bg-zinc-800 rounded font-mono uppercase text-zinc-300">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedProject.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white z-20 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1 bg-primary/10 rounded-full">{selectedProject.category}</span>
                  <div className="h-px flex-grow bg-white/5" />
                </div>
                
                <h4 className="text-3xl md:text-4xl font-display font-medium text-white mb-6 leading-tight">{selectedProject.title}</h4>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-500 mb-3 tracking-[0.2em]">Objective & Resolution</p>
                    <p className="text-zinc-300 text-base leading-relaxed font-light">{selectedProject.problemSolved}</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-500 mb-3 tracking-[0.2em]">Research Summary</p>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{selectedProject.description}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-500 mb-3 tracking-[0.2em]">Instrumental Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1.5 bg-zinc-800 text-[10px] font-mono text-zinc-300 rounded-lg border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-primary transition-colors">
                      <Github size={18} /> Source Code
                    </a>
                    <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-primary transition-colors">
                      <ExternalLink size={18} /> Documentation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
