// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-24 px-6 bg-black border-t border-gray-900 relative overflow-hidden">
//       {/* Background Accent Glow */}
//       <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center text-white">
        
//         {/* Left Side: Bio & Interactive Stats */}
//         <div className="space-y-10 relative z-10">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="inline-block px-3 py-1 border border-cyan-400 text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold"
//           >
//             Corporate Profile
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter"
//           >
//             Architecting <br />
//             <span className="text-cyan-400 italic">Digital</span> Excellence.
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-gray-400 text-lg leading-relaxed max-w-lg font-medium"
//           >
//             At **OVIN CODE**, we engineer growth through high-performance software, generative AI integration, and scalable enterprise systems.
//           </motion.p>
          
//           {/* Animated Progress Bars */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
//             <div className="space-y-4">
//               <div className="flex justify-between items-end">
//                 <h4 className="text-cyan-400 font-black text-4xl">99.9%</h4>
//                 <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Client Satisfaction</p>
//               </div>
//               <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '99.9%' }}
//                   transition={{ duration: 1.5, ease: "easeOut" }}
//                   className="h-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"
//                 />
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex justify-between items-end">
//                 <h4 className="text-cyan-400 font-black text-4xl">24/7</h4>
//                 <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Expert Support</p>
//               </div>
//               <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '100%' }}
//                   transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
//                   className="h-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Floating Brand Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           className="relative group cursor-default"
//         >
//           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
//           <div className="relative bg-[#050505] border border-gray-800 p-16 md:p-24 rounded-lg flex flex-col items-center justify-center">
//              <motion.div 
//                animate={{ y: [0, -10, 0] }}
//                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                className="text-8xl md:text-9xl font-black text-white italic tracking-tighter mb-4"
//              >
//                OVIN
//              </motion.div>
//              <div className="h-[3px] w-40 bg-cyan-400 mb-6 shadow-[0_0_15px_#00ffff]"></div>
//              <div className="text-sm font-bold text-cyan-400/60 tracking-[0.8em] uppercase">
//                Technologies
//              </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;








import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, Layout, Database, ShoppingCart, MessageSquare } from 'lucide-react';

const About = () => {
  const coreValues = [
    { 
      title: "Scalable Web Solutions", 
      desc: "Responsive and tailored websites designed to grow with your business needs.",
      // White background ke liye dark colors use kiye hain icons mein
      icon: <Layout className="text-cyan-600" size={24} /> 
    },
    { 
      title: "Intelligent AI Systems", 
      desc: "AI-powered chatbots and assistants that automate support and enhance engagement.",
      icon: <MessageSquare className="text-purple-600" size={24} /> 
    },
    { 
      title: "Robust Backend", 
      desc: "Secure and efficient server-side architecture for seamless digital performance.",
      icon: <Database className="text-blue-600" size={24} /> 
    },
    { 
      title: "E-Commerce Growth", 
      desc: "Fully functional online stores built to convert visitors into loyal customers.",
      icon: <ShoppingCart className="text-emerald-600" size={24} /> 
    },
  ];

  return (
    // Background pure white (#ffffff) aur top-border subtle grey
    <section id="about" className="py-32 px-6 bg-[#ffffff] relative overflow-hidden border-t border-gray-100">
      {/* Dynamic Background Glows - Opacity bohot kam taaki white pe subtle lage */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: THE STORY (6 Columns) */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              // Pill background light grey aur text dark cyan
              className="inline-flex items-center gap-3 px-4 py-2 border border-gray-100 bg-gray-50 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#12b3ad] animate-pulse"></span>
              <span className="text-[#12b3ad] text-[10px] tracking-[0.3em] uppercase font-black">Who We Are</span>
            </motion.div>
            
            {/* HEADLINE UPDATE */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // Text color ko slate-950 (almost black) kiya hai readable rakhne ke liye
              className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase"
            >
              OVIN <br /> 
              {/* Gradient professional markers shades mein */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-[#12b3ad] italic">CODERS</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // Body text slate-700 (good readability on white)
              className="space-y-6 text-slate-700 text-lg leading-relaxed font-light max-w-xl"
            >
              <p>
                We are a <span className="text-slate-950 font-semibold">modern IT services company</span> dedicated to helping businesses grow in the digital world. Our expertise lies in developing high-quality websites, intelligent AI solutions, and powerful backend systems.
              </p>
              <p>
                By combining modern technologies, creativity, and reliable development practices, we aim to deliver innovative digital solutions that help companies build a strong online presence and achieve <span className="text-cyan-700 font-bold">long-term growth</span>.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="flex gap-12 pt-8 border-t border-gray-100">
               <div>
                  {/* Stat value text-slate-950 */}
                  <h4 className="text-3xl font-black text-slate-950">99%</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Efficiency Rate</p>
               </div>
               <div>
                  <h4 className="text-3xl font-black text-slate-950">24/7</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Smart Support</p>
               </div>
            </div>
          </div>

          {/* RIGHT: THE BENTO GRID (6 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                // Subtle hover shadow aur border color change white background ke liye
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-8 bg-white border border-gray-100 rounded-[32px] transition-all duration-300 group shadow-sm"
              >
                {/* Icon background light slate */}
                <div className="mb-6 p-3 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                {/* Text colors slate-950 aur slate-600 */}
                <h3 className="text-slate-950 text-lg font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
            
            {/* Large Branding Box (Spans 2 columns on mobile/tablet if needed) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // Branding box white theme ke light gradient mein
              className="md:col-span-2 p-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-[32px] flex items-center justify-between overflow-hidden relative group"
            >
               <div className="relative z-10">
                  <h3 className="text-slate-950 text-2xl font-black uppercase italic tracking-tighter">OVIN CODE X</h3>
                  <p className="text-cyan-700 text-[10px] font-bold tracking-[0.4em] uppercase mt-2">Precision Engineered</p>
               </div>
               {/* CPU Icon slate color low opacity */}
               <div className="absolute right-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu size={180} className="text-slate-900" />
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;