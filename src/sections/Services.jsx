// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code, Cpu, Globe, Search, Database, Smartphone, 
//   Layout, PenTool, MessageSquare, Zap, Terminal, 
//   ShieldCheck, BarChart3, Layers, Settings 
// } from 'lucide-react';

// const services = [
//   { title: "Software Developer", icon: <Code size={28}/>, desc: "Custom high-performance software engineered for complex business requirements.", features: ["Bespoke Logic", "Scalable Systems", "Performance Tuning"] },
//   { title: "Backend Services", icon: <Database size={28}/>, desc: "Secure and robust server-side architecture using Django and enterprise Node.js.", features: ["API Development", "Secure Auth", "Microservices"] },
//   { title: "Full-Stack Dev", icon: <Globe size={28}/>, desc: "End-to-end web applications bridging the gap between sleek UI and powerful logic.", features: ["React Integration", "Database Design", "Real-time Sync"] },
//   { title: "Web Designing", icon: <Layout size={28}/>, desc: "Aesthetically superior web layouts crafted for maximum engagement and brand identity.", features: ["Modern UI", "Interactive Prototypes", "Visual Identity"] },
//   { title: "UI/UX Designing", icon: <PenTool size={28}/>, desc: "User-centric experience design focused on intuitive navigation and accessibility.", features: ["User Research", "Wireframing", "High-Fidelity UI"] },
//   { title: "Generative AI", icon: <Cpu size={28}/>, desc: "Integrating advanced LLMs and AI models to automate content and data workflows.", features: ["Prompt Engineering", "Model Fine-tuning", "AI Workflow"] },
//   { title: "Chat Bots", icon: <MessageSquare size={28}/>, desc: "Intelligent conversational agents for automated customer service and lead generation.", features: ["NLP Integration", "Custom Logic", "24/7 Automation"] },
//   { title: "AI Assistants", icon: <Zap size={28}/>, desc: "Virtual smart assistants designed to optimize internal operations and productivity.", features: ["Task Automation", "Smart Scheduling", "Data Analysis"] },
//   { title: "E-commerce Web", icon: <Smartphone size={28}/>, desc: "Comprehensive commerce solutions with secure checkouts and inventory management.", features: ["Secure Payments", "Cart Optimization", "Product CMS"] },
//   { title: "IT Services", icon: <ShieldCheck size={28}/>, desc: "Strategic IT consulting and infrastructure management for digital transformation.", features: ["Network Security", "Cloud Migration", "Tech Strategy"] },
//   { title: "Frontend Web Dev", icon: <Terminal size={28}/>, desc: "Pixel-perfect frontend execution using modern frameworks like React and Vite.", features: ["Responsive Design", "State Management", "Fast Rendering"] },
//   { title: "React Developer", icon: <Layers size={28}/>, desc: "Specialized React.js development for high-performance, component-based web apps.", features: ["Hook Optimization", "Dynamic Components", "SPA Architecture"] },
//   { title: "Portfolio Dev", icon: <BarChart3 size={28}/>, desc: "Professional personal branding websites tailored for creators and executives.", features: ["SEO Optimized", "Personal Branding", "Fast Loading"] },
//   { title: "SEO Friendly", icon: <Search size={28}/>, desc: "Strategic search engine optimization to boost visibility and organic ranking.", features: ["On-page SEO", "Technical SEO", "Performance Audit"] },
//   { title: "Website Maintenance", icon: <Settings size={28}/>, desc: "Proactive site monitoring, regular updates, and critical security patches.", features: ["Security Updates", "Bug Fixes", "Uptime Monitor"] }
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-32 px-6 bg-black relative overflow-hidden">
//       {/* Dynamic Background Accents */}
//       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
//       <div className="max-w-[1500px] mx-auto relative z-10">
//         <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
//           <div className="max-w-2xl">
//             <motion.span 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="text-cyan-400 text-xs font-bold tracking-[0.5em] uppercase block mb-4"
//             >
//               Capabilities & Expertise
//             </motion.span>
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
//             >
//               Our <span className="text-cyan-400 italic">Core</span> Specializations
//             </motion.h2>
//           </div>
//           <div className="text-gray-500 text-sm max-w-xs font-medium border-l border-gray-800 pl-6 hidden md:block">
//             Providing enterprise-grade technology solutions designed for the next era of digital business.
//           </div>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-gray-900 border border-gray-900">
//           {services.map((s, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ scale: 1.02, zIndex: 20 }}
//               className="group relative p-10 bg-black transition-all duration-500 overflow-hidden cursor-default"
//             >
//               {/* Cyan Glow Overlay */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
//                 <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/20 blur-[60px] rounded-full"></div>
//               </div>

//               {/* Icon & Title */}
//               <div className="relative z-10">
//                 <div className="text-gray-500 group-hover:text-cyan-400 mb-8 transition-colors duration-500">
//                   {s.icon}
//                 </div>
//                 <h3 className="text-sm font-black text-white uppercase mb-4 tracking-widest group-hover:text-cyan-400 transition-colors">
//                   {s.title}
//                 </h3>
//                 <p className="text-gray-500 text-[11px] leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
//                   {s.desc}
//                 </p>

//                 {/* Bullet Points on Hover */}
//                 <ul className="space-y-2 pt-6 border-t border-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                   {s.features.map((f, idx) => (
//                     <li key={idx} className="text-[9px] text-cyan-400/80 font-bold uppercase flex items-center gap-2 tracking-tighter">
//                       <span className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_#00ffff]"></span> {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Bottom Border Accent */}
//               <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-700"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { 
  Code, Cpu, Globe, Database, Layout, 
  PenTool, MessageSquare, Zap, Smartphone, 
  Layers, X, CheckCircle2, ArrowRight, Target, Clock3 
} from 'lucide-react';

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

const services = [
  { id: 1, title: "Software Developer", icon: <Code size={28}/>, desc: "Custom high-performance software engineered for complex business requirements.", features: ["Bespoke Logic", "Scalable Systems", "Performance Tuning"] },
  { id: 2, title: "Backend Services", icon: <Database size={28}/>, desc: "Secure and robust server-side architecture using Django and enterprise Node.js.", features: ["API Development", "Secure Auth", "Microservices"] },
  { id: 3, title: "Full-Stack Dev", icon: <Globe size={28}/>, desc: "End-to-end web applications bridging the gap between sleek UI and powerful logic.", features: ["React Integration", "Database Design", "Real-time Sync"] },
  { id: 4, title: "Web Designing", icon: <Layout size={28}/>, desc: "Aesthetically superior web layouts crafted for maximum engagement and brand identity.", features: ["Modern UI", "Interactive Prototypes", "Visual Identity"] },
  { id: 5, title: "UI/UX Designing", icon: <PenTool size={28}/>, desc: "User-centric experience design focused on intuitive navigation and accessibility.", features: ["User Research", "Wireframing", "High-Fidelity UI"] },
  { id: 6, title: "Generative AI", icon: <Cpu size={28}/>, desc: "Integrating advanced LLMs and AI models to automate content and data workflows.", features: ["Prompt Engineering", "Model Fine-tuning", "AI Workflow"] },
  { id: 7, title: "Chat Bots", icon: <MessageSquare size={28}/>, desc: "Intelligent conversational agents for automated customer service and lead generation.", features: ["NLP Integration", "Custom Logic", "24/7 Automation"] },
  { id: 8, title: "React Developer", icon: <Layers size={28}/>, desc: "Specialized React.js development for high-performance, component-based web apps.", features: ["Hook Optimization", "Dynamic Components", "SPA Architecture"] },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-32 px-6 bg-[#ffffff] relative overflow-hidden border-t border-gray-100">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-gray-100 bg-gray-50 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-cyan-900 text-[10px] tracking-[0.3em] uppercase font-black">Capabilities</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]"
            >
              OVIN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 italic">CODERS</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-12 pb-2">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-50 rounded-full border border-cyan-100 text-cyan-600"><Target size={24}/></div>
                <div><h4 className="text-2xl font-black text-slate-900">99%</h4><p className="text-[10px] text-gray-400 font-bold uppercase">Efficiency</p></div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-full border border-blue-100 text-blue-600"><Clock3 size={24}/></div>
                <div><h4 className="text-2xl font-black text-slate-900">24/7</h4><p className="text-[10px] text-gray-400 font-bold uppercase">Support</p></div>
             </div>
          </div>
        </header>

        {/* Swiper Slider */}
        <div className="mx-[-24px] px-6">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            freeMode={true} 
            loop={true}
            speed={5000} 
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false 
            }}
            onMouseEnter={(swiper) => swiper.autoplay.stop()}
            onMouseLeave={(swiper) => swiper.autoplay.start()}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            className="pb-12 pt-4 continuous-slider"
          >
            {services.map((s) => (
              <SwiperSlide key={s.id} className="!h-auto">
                <div 
                  onClick={() => setSelectedService(s)}
                  className="group relative p-8 h-full min-h-[380px] bg-white border border-gray-100 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="mb-8 inline-flex p-4 rounded-2xl bg-slate-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between group/btn pt-6 border-t border-gray-50">
                    <span className="text-[10px] text-cyan-600 font-black uppercase tracking-[0.2em]">Explore Service</span>
                    <div className="p-2 rounded-full bg-gray-50 group-hover/btn:bg-cyan-500 group-hover/btn:text-white transition-all">
                        <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* --- FIXED AESTHETIC GLASS POPUP --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-[8px]"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rounded-[48px] overflow-hidden z-[110]"
            >
              {/* Decorative Blobs */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full animate-pulse" />

              <div className="relative z-10 p-8 md:p-14">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-3 rounded-full bg-white/50 border border-gray-100 hover:bg-red-50 hover:text-red-500 transition-all active:scale-90 group"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform" />
                </button>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_20px_40px_rgba(6,182,212,0.3)]">
                    {/* Fixed Icon Rendering */}
                    {React.cloneElement(selectedService.icon, { size: 36 })}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-2 block">Premium Expertise</span>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  {selectedService.desc}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Core Features</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        key={idx} 
                        className="flex items-center gap-4 p-5 bg-white/40 border border-white/60 rounded-3xl shadow-sm hover:shadow-md hover:bg-white/60 transition-all group/feat"
                      >
                        <div className="p-1.5 rounded-full bg-cyan-50 group-hover/feat:bg-cyan-500 transition-colors">
                            <CheckCircle2 size={16} className="text-cyan-600 group-hover/feat:text-white" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                    <button className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-600 hover:shadow-[0_15px_30px_rgba(6,182,212,0.3)] transition-all active:scale-95 shadow-xl">
                        Start Your Project
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;