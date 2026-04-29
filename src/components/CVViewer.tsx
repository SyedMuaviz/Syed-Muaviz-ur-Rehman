import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const CVViewer = () => {
  return (
    <section id="cv" className="section-padding bg-primary rounded-[3rem] mx-4 sm:mx-8 my-20 overflow-hidden relative group">
      <div className="absolute -right-4 top-0 bottom-0 flex items-center opacity-10 pointer-events-none select-none">
          <div className="text-[240px] font-display font-black text-white">CV</div>
      </div>

      <div className="container-custom relative z-10 p-8 md:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-white font-display font-medium text-3xl md:text-5xl mb-6">Academic <span className="italic font-serif">Portfolio</span></h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-md font-light leading-relaxed">
              Comprehensive CV detailing my academic standing (CGPA 3.89), research publications in AI, and high-performance technical stack.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                href="/resume.pdf"
                download="Muaviz_Rehman_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl"
              >
                Download CV <Download size={18} />
              </motion.a>
              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-cyan-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 border border-white/10 hover:bg-cyan-800 transition-all"
              >
                LinkedIn Profile <Eye size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 hidden lg:block"
          >
            <div className="p-12 bg-white rounded-3xl shadow-2xl relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-display font-bold">Muaviz_Resume.pdf</h4>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Version 2.0 • 2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-zinc-100 rounded-full w-full" />
                <div className="h-4 bg-zinc-100 rounded-full w-5/6" />
                <div className="h-4 bg-zinc-100 rounded-full w-4/6" />
                <div className="h-4 bg-zinc-50 rounded-full w-full" />
                <div className="h-4 bg-zinc-50 rounded-full w-3/4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
