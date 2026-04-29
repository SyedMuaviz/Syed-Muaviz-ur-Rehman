import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Python Developer', 'Data Analyst', 'Web Developer', 'Data Entry Specialist', 'AI Researcher'];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1) 
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container-custom relative z-10 text-center flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900 border border-emerald-500/30 mb-10 shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-400">Available for Hiring</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-medium leading-[1] mb-8 tracking-tighter text-white">
            Architecting <span className="italic font-serif text-primary">Intelligence</span>.
          </h1>
          
          <div className="mb-8 min-h-[1.5em]">
            <p className="text-xl md:text-3xl font-light text-zinc-400 tracking-tight">
              Specializing in <span className="text-white font-medium border-b-2 border-primary/20 pb-1">{displayText}</span>
              <span className="animate-pulse ml-0.5 text-primary">_</span>
            </p>
          </div>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-300 mb-12 leading-relaxed font-light">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all shadow-2xl shadow-primary/20"
            >
              Explore Research <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#cv"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 border border-white/10 text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all"
            >
              Curriculum Vitae <Download size={16} />
            </motion.a>
          </div>

          {/* Integrated Stats Section - prevents overlapping */}
          <div className="flex items-center justify-center gap-10 md:gap-16 pt-12 border-t border-white/5 w-full max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-medium text-white mb-1">3.89</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">CGPA / 4.00</span>
            </div>
            <div className="w-px h-10 bg-white/5"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-medium text-white mb-1">10+</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Research Core</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};
