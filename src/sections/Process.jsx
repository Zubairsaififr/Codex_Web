import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Search, Code, CheckCircle, Rocket } from 'lucide-react';
import DesktopImage from '../assets/hehe.jpeg'; 

const Process = () => {
  // Ultra-smooth animation variants
  const cardVariants = (direction) => ({
    initial: { opacity: 0, x: direction === 'left' ? -50 : 50, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <section id="process" className="pt-32 pb-0 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-30 mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-cyan-600 text-[15px] font-semibold  tracking-[0.5em] uppercase block mb-4">
            Workflow Methodology
          </span>
          <h2 className="text-6xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter leading-[0.8] mb-2">
            HOW WE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-600 to-black">ExecutE.</span>
          </h2>
        </motion.div>
      </div>

      {/* --- Full Width Image Container --- */}
      <div className="relative w-full">
        
        {/* Background Image */}
        <div className="w-full h-auto bg-slate-50">
          <img 
            src={DesktopImage} 
            alt="Process Flow" 
            className="w-full h-auto block object-cover" 
          />
        </div>

        {/* --- Floating Content Overlay --- */}
        <div className="absolute inset-0 z-20 overflow-hidden">

          {/* STEP 01 - Top Left */}
          <motion.div {...cardVariants('left')} className="absolute top-[6%] left-[5%] md:left-[10%] w-[100%] md:w-[450px]">
            <div className="group  relative top-40 h-[400px] p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white/80">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 italic tracking-tighter">01</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-950 uppercase tracking-tight leading-none mb-4">
                Strategic <br/> Consultation
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed opacity-80">
                Hum aapke business goals ko analyze karke ek customized execution roadmap taiyar karte hain.
              </p>
              <div className="mt-6 w-12 h-1 bg-cyan-500 rounded-full" />
            </div>
          </motion.div>

          {/* STEP 02 - Mid Right */}
          <motion.div {...cardVariants('right')} className="absolute top-[28%] right-[5%] md:right-[10%] w-[85%] md:w-[450px]">
            <div className="group relative top-40 h-[400px] p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white/80 text-right">
              <div className="flex items-center justify-between flex-row-reverse mb-6">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Search size={28} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 italic tracking-tighter">02</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-950 uppercase tracking-tight leading-none mb-4">
                Architecture <br/> & Planning
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed opacity-80">
                Technical blueprinting aur milestone mapping taaki project on-time aur scalable deliver ho sake.
              </p>
              <div className="mt-6 w-12 h-1 bg-cyan-500 rounded-full ml-auto" />
            </div>
          </motion.div>

          {/* STEP 03 - Mid Left */}
          <motion.div {...cardVariants('left')} className="absolute top-[50%] left-[5%] md:left-[10%] w-[85%] md:w-[450px]">
            <div className="group relative top-40 h-[400px] p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white/80">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Code size={28} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 italic tracking-tighter">03</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-950 uppercase tracking-tight leading-none mb-4">
                Full-Stack <br/> Engineering
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed opacity-80">
                Expert team React, Django aur AI models ka use karke aapke product ka high-performance core build karti hai.
              </p>
              <div className="mt-6 w-12 h-1 bg-cyan-500 rounded-full" />
            </div>
          </motion.div>

          {/* STEP 04 - Bottom Right */}
          <motion.div {...cardVariants('right')} className="absolute top-[72%] right-[5%] md:right-[10%] w-[85%] md:w-[450px]">
            <div className="group relative top-70 h-[400px] p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white/80 text-right">
              <div className="flex items-center justify-between flex-row-reverse mb-6">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <CheckCircle size={28} />
                </div>
                <span className="text-5xl font-black text-slate-900/5 italic tracking-tighter">04</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-950 uppercase tracking-tight leading-none mb-4">
                Quality <br/> Validation
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed opacity-80">
                Rigorous stress-testing aur security audits taaki deployment se pehle bug-free experience mil sake.
              </p>
              <div className="mt-6 w-12 h-1 bg-cyan-500 rounded-full ml-auto" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="py-32 bg-white flex justify-center relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-8 p-10 bg-slate-50 rounded-[3rem] border border-gray-100 shadow-inner"
        >
          <div className="flex flex-col text-center md:text-left">
            <p className="text-slate-950 font-black text-2xl uppercase tracking-tighter">Next Step: Launch.</p>
            <p className="text-slate-500 font-medium italic">Ready to initiate the first phase of your project?</p>
          </div>
          <a href="#contact" className="px-12 py-5 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-cyan-600 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all rounded-full flex items-center gap-3">
            Let's Talk <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Process;