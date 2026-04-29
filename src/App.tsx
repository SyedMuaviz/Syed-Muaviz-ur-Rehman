/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { CVViewer } from './components/CVViewer';
import { Blog } from './components/Blog';
import { Contact, Footer } from './components/Contact';

export default function App() {
  useEffect(() => {
    // Reveal animation on scroll or other global side effects can go here
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Blog />
        <CVViewer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
