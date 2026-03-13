import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const reviews = [
  { 
    text: "OVINCODEX transformed our customer support with a high-end AI agent. Our response time dropped by 60%, and team efficiency skyrocketed. They are truly next-level developers.", 
    name: "Robert Sterling", 
    position: "CTO, TechLogix" 
  },
  { 
    text: "The Full-Stack CRM built with Django and React is exactly what we needed to manage our business. Outstanding engineering and seamless communication throughout the project.", 
    name: "Sarah Jenkins", 
    position: "Founder, Devansh Digital" 
  },
  { 
    text: "We don't just write code; we engineer solutions. Their team provided an exceptionally professional experience and delivered a result-driven digital transformation for our brand.", 
    name: "Amit Khanna", 
    position: "Director, Enterprise Solutions" 
  }
];

const ReviewSlider = () => {
  return (
    // Background fixed to white
    <section className="py-28 bg-white border-t border-gray-100 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Subtle Elements - Soft cyan glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#12b3ad] text-xs font-bold tracking-[0.5em] uppercase block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
            Client <span className="text-[#12b3ad] italic">Perspectives</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Quote Icon - Very subtle behind the card */}
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-cyan-500/10 z-0 pointer-events-none">
            <Quote size={180} strokeWidth={1} />
          </div>

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ clickable: true }}
            className="pb-20 pt-10 review-swiper"
            style={{
              "--swiper-pagination-color": "#0ea5e9",
              "--swiper-pagination-bullet-inactive-color": "#cbd5e1",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
            }}
          >
            {reviews.map((rev, i) => (
              <SwiperSlide key={i} className="z-10 px-4">
                {({ isActive }) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      scale: isActive ? 1 : 0.95,
                      y: isActive ? 0 : 20 
                    }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center min-h-[300px] bg-white border border-gray-100 rounded-[2rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                  >
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, index) => (
                            <Star key={index} size={16} className="fill-cyan-500 text-[#12b3ad]" />
                        ))}
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 font-medium italic leading-relaxed mb-10">
                      "{rev.text}"
                    </p>
                    
                    <div className="h-px w-20 bg-cyan-500/30 mb-8"></div>

                    <div className="flex flex-col items-center justify-center gap-1">
                      <h4 className="text-slate-900 font-black text-xl uppercase tracking-widest">
                        {rev.name}
                      </h4>
                      <p className="text-cyan-600 text-[10px] uppercase font-bold tracking-[0.4em]">
                        {rev.position}
                      </p>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;