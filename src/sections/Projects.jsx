import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const projects = [
  {
    id: 1,
    title: "Enterprise CRM System",
    category: "Full-Stack • Django • React",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Devansh Corporate Portal",
    category: "Web Development • SEO",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    category: "Generative AI • Python",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "E-Commerce Ecosystem",
    category: "Web App • MySQL • React",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
  }
];

const Projects = () => {
  return (
    // Background fixed to white
    <section id="projects" className="py-32 px-6 bg-white transition-colors duration-500 relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#5cccbf] text-xs font-bold tracking-[0.5em] uppercase block mb-4"
            >
              Our Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter transition-colors duration-500"
            >
              Featured <span className="text-[#5cccbf] italic">Projects</span>
            </motion.h2>
          </div>
          <div className="text-slate-400 text-sm max-w-xs font-medium border-l-2 border-[#5cccbf]/30 pl-6 hidden md:block transition-colors duration-500">
            Showcasing our precision engineering in software development and AI integration.
          </div>
        </header>

        {/* The Project Swiper Slider */}
        <div className="mx-[-24px] px-6">
          <Swiper
            modules={[Autoplay, Pagination, FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={5000} // Smooth continuous scrolling
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1400: { slidesPerView: 3.2 },
            }}
            className="pb-16 pt-4 project-slider"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="!h-auto">
                <motion.div 
                  className="group relative h-[450px] w-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] cursor-pointer"
                >
                  {/* Project Image as Background with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-end overflow-hidden">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[#5cccbf] font-mono text-sm block mb-2">0{index + 1}</span>
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                          {project.category}
                        </p>
                      </div>

                      {/* Floating Arrow */}
                      <div className="bg-white p-3 rounded-full text-slate-900 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 delay-75 shadow-xl">
                        <ArrowUpRight size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Hover Accent Line at Top */}
                  <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#5cccbf] group-hover:w-full transition-all duration-700"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Projects;