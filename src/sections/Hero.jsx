


// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { X, Zap, Target, Shield } from "lucide-react"; // Extra icons for modal
// import logo from "../assets/logo_ov2.0.png";

// const Hero = () => {
//   const container = useRef();
//   const [selectedId, setSelectedId] = useState(null);

//   useGSAP(() => {
//     let tl = gsap.timeline();
//     tl.from(".gsap-text", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
//     tl.from(".gsap-image", { x: 100, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.5");
//   }, { scope: container });

//   const techCategories = [
//     {
//       id: "ui-ux",
//       name: "UI/UX Design",
//       img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "We create user-centric designs that are not only visually stunning but also highly functional and accessible.",
//       accentColor: "#5cccbf"
//     },
//     {
//       id: "gen-ai",
//       name: "Generative AI",
//       img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Harnessing the power of LLMs like GPT-4 to automate workflows and create intelligent content solutions.",
//       accentColor: "#6366f1"
//     },
//     {
//       id: "ai-bot",
//       name: "AI Chat Bot",
//       img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Custom-built conversational agents designed to provide 24/7 support and boost customer engagement.",
//       accentColor: "#06b6d4"
//     },
//     {
//       id: "ai-ast",
//       name: "AI Assistant",
//       img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Smart virtual assistants that integrate with your internal tools to streamline complex business operations.",
//       accentColor: "#a855f7"
//     },
//     {
//       id: "e-com",
//       name: "E-Commerce Website",
//       img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Scalable online stores with secure payment gateways and seamless user journeys to maximize sales.",
//       accentColor: "#f59e0b"
//     },
//     {
//       id: "it-serv",
//       name: "IT Services",
//       img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Reliable IT infrastructure and consulting services to ensure your business stays ahead in the digital race.",
//       accentColor: "#10b981"
//     },
//     {
//       id: "front-dev",
//       name: "Frontend Development",
//       img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Pixel-perfect, responsive, and high-performance frontend interfaces built with modern technologies.",
//       accentColor: "#3b82f6"
//     },
//     {
//       id: "react-dev",
//       name: "React Development",
//       img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
//       longDesc: "Specializing in React.js to build dynamic, fast-loading Single Page Applications (SPAs).",
//       accentColor: "#00d8ff"
//     }
//   ];

//   const activeTech = techCategories.find(t => t.id === selectedId);

//   return (
//     <>
//       <section ref={container} className="relative min-h-screen bg-[#f8fafc] flex flex-col justify-center overflow-hidden pt-20 pb-32">
//         {/* Background Glow */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//           <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5cccbf]/20 blur-[120px] rounded-full" />
//           <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-400/10 blur-[150px] rounded-full" />
//         </div>

//         <div className="max-w-[1440px] w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
//           {/* LEFT CONTENT */}
//           <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
//             <div className="gsap-text px-4 py-1.5 mb-6 border border-[#5cccbf]/40 bg-[#5cccbf]/10 text-[#2b9d8f] text-xs tracking-[0.4em] font-black uppercase rounded-full">
//               Next-Gen Digital Agency
//             </div>
//             <h1 className="gsap-text text-5xl md:text-8xl lg:text-[9rem] font-thin text-slate-900 leading-[0.8] tracking-tighter uppercase mb-2">
//               OVIN <br />
//               <span className="flex items-baseline justify-center md:justify-start">
//                 <span className="font-extralight">CODE</span>
//                 <span className="ml-3 text-[10rem] md:text-[11rem] font-black italic text-[#12b3ad]">X</span>
//               </span>
//             </h1>
//             <div className="gsap-text h-12 text-2xl md:text-4xl font-bold text-slate-800 mb-10 mt-4">
//               <span className="text-[#5cccbf] mr-2">We Build</span>
//               <Typewriter words={["Web Applications", "Generative AI", "AI Chatbots", "E-Commerce Stores"]} loop cursor cursorStyle="_" cursorColor="#5cccbf" />
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end gsap-image">
//             <div className="relative w-3/4 max-w-[500px]">
//               <img src={logo} alt="logo" className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION WITH INFINITE SCROLL */}
//       <section className="w-full py-20 bg-white border-t border-gray-200">
//         <div className="text-center mb-16 px-6">
//           <p className="text-[#5cccbf] font-bold tracking-widest uppercase text-sm mb-4">WHAT WE DO</p>
//           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Core Services</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
//             We build powerful digital products, AI systems, and scalable web
//             platforms that help businesses grow faster.
//           </p>
//         </div>

//         <div className="overflow-hidden">
//           <div className="animate-infinite-scroll gap-8 px-10 flex">
//             {[...techCategories, ...techCategories].map((item, index) => (
//               <motion.div
//                 key={index}
//                 layoutId={index < techCategories.length ? `card-${item.id}` : `card-clone-${index}`}
//                 onClick={() => setSelectedId(item.id)}
//                 className="group relative w-[260px] h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 transition cursor-pointer"
//               >
//                 <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
//                   <h3 className="text-white text-lg font-bold">{item.name}</h3>
//                   <p className="text-[#5cccbf] text-sm font-bold opacity-0 group-hover:opacity-100 transition">Explore Domain →</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* POPUP MODAL LOGIC */}
//       <AnimatePresence>
//         {selectedId && activeTech && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               exit={{ opacity: 0 }} 
//               onClick={() => setSelectedId(null)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
//             />

//             <motion.div 
//               layoutId={`card-${selectedId}`}
//               className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-[110]"
//               style={{ minHeight: '500px' }}
//             >
//               {/* Modal Left: Image */}
//               <div className="w-full md:w-5/12 relative h-48 md:h-auto">
//                 <img src={activeTech.img} alt={activeTech.name} className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white md:from-white/90 to-transparent" />
//               </div>

//               {/* Modal Right: Content */}
//               <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-white">
//                 <button 
//                   onClick={() => setSelectedId(null)}
//                   className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <X size={24} className="text-gray-400" />
//                 </button>

//                 <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block" style={{ color: activeTech.accentColor }}>
//                   Service Details
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-4 tracking-tighter">
//                   {activeTech.name}
//                 </h2>
//                 <div className="w-12 h-1 mb-6" style={{ backgroundColor: activeTech.accentColor }} />
                
//                 <p className="text-gray-600 leading-relaxed mb-8 text-lg">
//                   {activeTech.longDesc}
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
//                     <Zap size={16} className="text-yellow-500" />
//                     <span className="text-xs font-bold text-gray-700">Fast Delivery</span>
//                   </div>
//                   <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
//                     <Shield size={16} className="text-green-500" />
//                     <span className="text-xs font-bold text-gray-700">Secure Code</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         @keyframes infiniteScroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-infinite-scroll {
//           display: flex;
//           width: max-content;
//           animation: infiniteScroll 30s linear infinite;
//         }
//         .animate-infinite-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;



























import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X, Zap, Target, Shield } from "lucide-react";
import logo from "../assets/logo_ov2.0.png";

const Hero = () => {
  const container = useRef();
  const [selectedId, setSelectedId] = useState(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".gsap-text", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
    tl.from(".gsap-image", { x: 100, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.5");
  }, { scope: container });

  const techCategories = [
    {
      id: "ui-ux",
      name: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      longDesc: "We create user-centric designs that are not only visually stunning but also highly functional and accessible.",
      accentColor: "#5cccbf"
    },
    {
      id: "gen-ai",
      name: "Generative AI",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Harnessing the power of LLMs like GPT-4 to automate workflows and create intelligent content solutions.",
      accentColor: "#6366f1"
    },
    {
      id: "ai-bot",
      name: "AI Chat Bot",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Custom-built conversational agents designed to provide 24/7 support and boost customer engagement.",
      accentColor: "#06b6d4"
    },
    {
      id: "ai-ast",
      name: "AI Assistant",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Smart virtual assistants that integrate with your internal tools to streamline complex business operations.",
      accentColor: "#a855f7"
    },
    {
      id: "e-com",
      name: "E-Commerce Website",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Scalable online stores with secure payment gateways and seamless user journeys to maximize sales.",
      accentColor: "#f59e0b"
    },
    {
      id: "it-serv",
      name: "IT Services",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Reliable IT infrastructure and consulting services to ensure your business stays ahead in the digital race.",
      accentColor: "#10b981"
    },
    {
      id: "front-dev",
      name: "Frontend Development",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Pixel-perfect, responsive, and high-performance frontend interfaces built with modern technologies.",
      accentColor: "#3b82f6"
    },
    {
      id: "react-dev",
      name: "React Development",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
      longDesc: "Specializing in React.js to build dynamic, fast-loading Single Page Applications (SPAs).",
      accentColor: "#00d8ff"
    }
  ];

  const activeTech = techCategories.find(t => t.id === selectedId);

  return (
    <>
      <section ref={container} className="relative min-h-screen bg-[#f8fafc] flex flex-col justify-center overflow-hidden pt-20 pb-32">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5cccbf]/20 blur-[120px] rounded-full" />
          <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-400/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">

            <div className="gsap-text px-4 py-1.5 mb-6 border border-[#5cccbf]/40 bg-[#5cccbf]/10 text-[#2b9d8f] text-xs tracking-[0.4em] font-black uppercase rounded-full">
              Next-Gen Digital Agency
            </div>

            <h1 className="gsap-text text-5xl md:text-8xl lg:text-[9rem] font-thin text-slate-900 leading-[0.8] tracking-tighter uppercase mb-2">
              OVIN <br />
              <span className="flex items-baseline justify-center md:justify-start">
                <span className="font-extralight">CODE</span>
                <span className="ml-3 text-[10rem] md:text-[11rem] font-black italic text-[#12b3ad]">X</span>
              </span>
            </h1>

            {/* TYPEWRITER */}
            <div className="gsap-text h-12 text-2xl md:text-4xl font-bold text-slate-800 mb-10 mt-4">
              <span className="text-[#5cccbf] mr-2">We Build</span>

              <span className="font-mono">
                <Typewriter
                  words={[
                    "Web Applications",
                    "Generative AI",
                    "AI Chatbots",
                    "E-Commerce Stores"
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  cursorColor="#5cccbf"
                />
              </span>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end gsap-image">
            <div className="relative w-3/4 max-w-[500px]">
              <img src={logo} alt="logo" className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition" />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full py-20 bg-white border-t border-gray-200">

        <div className="text-center mb-16 px-6">
          <p className="text-[#5cccbf] font-bold tracking-widest uppercase text-sm mb-4">
            WHAT WE DO
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Our Core Services
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We build powerful digital products, AI systems, and scalable web
            platforms that help businesses grow faster.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="animate-infinite-scroll gap-8 px-10 flex">
            {[...techCategories, ...techCategories].map((item, index) => (
              <motion.div
                key={index}
                layoutId={index < techCategories.length ? `card-${item.id}` : `card-clone-${index}`}
                onClick={() => setSelectedId(item.id)}
                className="group relative w-[260px] h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 transition cursor-pointer"
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-bold">
                    {item.name}
                  </h3>

                  <p className="text-[#5cccbf] text-sm font-bold opacity-0 group-hover:opacity-100 transition">
                    Explore Domain →
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;