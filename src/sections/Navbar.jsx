import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detect karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled
            ? "py-4 bg-black/80 backdrop-blur-lg border-b border-gray-900 shadow-lg"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl md:text-3xl font-black tracking-tighter text-white group"
          >
            OVIN{" "}
            <span className="text-[#12b3ad] italic group-hover:text-white transition-colors">
              <span className="text-lg md:text-xl">CODE</span>
              <span className="text-3xl md:text-4xl ml-[1px]">X</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a href="#contact" className="px-6 py-2.5 bg-[#12b3ad] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300">
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#050505] border-b border-gray-900 pt-24 px-6 md:hidden flex flex-col h-[40vh]"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white uppercase tracking-tighter hover:text-cyan-400 transition-colors border-b border-gray-900 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cyan-400 text-lg font-bold uppercase tracking-widest mt-4"
              >
                Get In Touch &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;