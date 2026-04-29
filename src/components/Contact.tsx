import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="flex-1">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Get in touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight">
              Let's <span className="italic font-serif text-primary">Connect</span> <br />and Innovate Together
            </h3>
            
            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-display font-bold text-zinc-200 hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-500">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-lg font-display font-bold text-zinc-200 hover:text-[#0077b5] transition-colors">
                    syedmuaviz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="bg-zinc-900/40 border border-white/5 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-6 py-4 bg-zinc-800/50 border border-white/5 text-white rounded-2xl focus:border-primary outline-none transition-all placeholder:text-zinc-600"
                    placeholder="Muaviz Rehman"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-6 py-4 bg-zinc-800/50 border border-white/5 text-white rounded-2xl focus:border-primary outline-none transition-all placeholder:text-zinc-600"
                    placeholder="muaviz@rehman.com"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-6 py-4 bg-zinc-800/50 border border-white/5 text-white rounded-2xl focus:border-primary outline-none transition-all resize-none placeholder:text-zinc-600"
                  placeholder="I'd love to work on an AI project with you..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl transition-all"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter">
            <span className="text-primary">Syed</span>Muaviz
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-bold text-zinc-400 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-sm font-bold text-zinc-400 hover:text-primary transition-colors">Projects</a>
            <a href="#cv" className="text-sm font-bold text-zinc-400 hover:text-primary transition-colors">Resume</a>
            <a href="#contact" className="text-sm font-bold text-zinc-400 hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-sm text-zinc-400 font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
