import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
//  import Services from './sections/Services.jsx';
import Projects from './sections/Projects.jsx';
import About from './sections/About.jsx';
import ReviewSlider from './sections/ReviewSlider.jsx';
import Footer from './sections/Footer.jsx';
import Contact from './sections/Contact.jsx';
import CustomCursor from './sections/CustomCursor.jsx';
import ContactWidget from './sections/ContactWidget.jsx';
import Process from './sections/Process.jsx';

function App() {
  return (
    // 1. Main container: Pura black background aur text white
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black scroll-smooth">
      
      {/* 2. THE BACKGROUND LAYER (Grid + Glow) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* The Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* The Cyan Glow (Centered) */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* 3. THE CONTENT LAYER (Z-10 ensures it stays above the background) */}
      <div className="relative z-10">
        <CustomCursor />
        <ContactWidget />
        <Navbar />
        
        <main>
          <Hero />
          <About />
           {/* <Services />  */}
          <Projects />
          <ReviewSlider />
          <Process/>
          <Contact />
        </main>
        
        <Footer />
      </div>

    </div>
  );
}

export default App
;