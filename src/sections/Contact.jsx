import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    // Background permanent white rakha hai
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden transition-colors duration-500 border-t border-gray-100">
      
      {/* Background Soft Glow - Subtle cyan touch */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Side: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <span className="text-[#5cccbf] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
              Global Connectivity
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
              Let's Build <br /><span className="text-[#5cccbf] italic">Excellence.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md transition-colors duration-500">
              Ready to architect your digital future? Reach out to our engineering team to discuss your next breakthrough project.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Email Contact */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#5cccbf] group-hover:bg-[#5cccbf] group-hover:text-white transition-all duration-500 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Direct Inquiries</p>
                <p className="text-slate-900 font-bold text-lg">solutions@ovincode.com</p>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#5cccbf] group-hover:bg-[#5cccbf] group-hover:text-white transition-all duration-500 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Phone Support</p>
                <p className="text-slate-900 font-bold text-lg">+91 98765 43210</p>
              </div>
            </div>

            {/* Location Contact */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#5cccbf] group-hover:bg-[#5cccbf] group-hover:text-white transition-all duration-500 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Headquarters</p>
                <p className="text-slate-900 font-bold text-lg">Ghaziabad, Uttar Pradesh, IN</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Consultation Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-colors duration-500 relative">
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-gray-100 py-3 text-sm text-slate-900 focus:border-[#5cccbf] outline-none transition-all placeholder-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-transparent border-b border-gray-100 py-3 text-sm text-slate-900 focus:border-[#5cccbf] outline-none transition-all placeholder-slate-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Work Email</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-gray-100 py-3 text-sm text-slate-900 focus:border-[#5cccbf] outline-none transition-all placeholder-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Expertise Needed</label>
                <select className="w-full bg-transparent border-b border-gray-100 py-3 text-sm text-slate-500 focus:border-[#5cccbf] outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a Service...</option>
                  <option value="software">Software Engineering</option>
                  <option value="ai">AI Implementation</option>
                  <option value="web">Enterprise Web Apps</option>
                  <option value="seo">Digital Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Brief Project Description</label>
                <textarea rows="4" placeholder="Tell us what you're building..." className="w-full bg-transparent border-b border-gray-100 py-3 text-sm text-slate-900 focus:border-[#5cccbf] outline-none transition-all resize-none placeholder-slate-300"></textarea>
              </div>

              <button type="button" className="group flex items-center justify-between w-full bg-slate-900 text-white font-black p-5 tracking-[0.3em] uppercase text-[10px] hover:bg-[#5cccbf] hover:text-white transition-all duration-300 mt-6 rounded-xl overflow-hidden shadow-lg shadow-slate-200">
                <span>Dispatch Request</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;