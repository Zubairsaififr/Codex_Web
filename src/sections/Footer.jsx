import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    // Background fixed to white 'bg-white'
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Subtle Accent - Light cyan blur effect */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#5cccbf]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Branding and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 uppercase">
                OVIN<span className="text-[#5cccbf] italic">CODEX</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                Architecting high-performance software, Generative AI ecosystems, and scalable digital solutions for the global era.
              </p>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Powered By</p>
                <span className="text-slate-800 font-black text-xs uppercase tracking-widest border-l-2 border-[#5cccbf] pl-4">
                  Ovin Enterprises
                </span>
            </div>

            {/* Social Links with Hover Glow and Permanent Light BG */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Github size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-11 h-11 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#5cccbf] hover:border-[#5cccbf] hover:bg-[#5cccbf]/5 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About Agency', 'Our Services', 'Portfolio', 'Contact Us'].map((item) => (
                <li key={item}>
                  {/* Link href dynamic based on text */}
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-slate-500 hover:text-[#5cccbf] text-sm font-bold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Legal & Privacy</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-[#5cccbf] text-sm font-bold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Metadata */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_-15px_30px_rgba(0,0,0,0.02)]">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} OVINCODEX Powered by Ovin Enterprise Engineering Lab. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <span>Built with precision in</span>
            <span className="text-[#5cccbf] font-black border-b border-[#5cccbf]/30 pb-0.5">Ghaziabad, IN</span>
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;