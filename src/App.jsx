import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
// import ToolsSection from "./components/ToolsSection";
import NewToolsSection from "./components/NewToolsSection";

import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <div id="hero" className="scroll-mt-24">
        <HeroSection />
      </div>
      <div id="features" className="scroll-mt-24">
        <FeaturesSection />
      </div>
      {/* <div id="tools" className="scroll-mt-24">
            <ToolsSection />
        </div> */}
      <div id="tools" className="scroll-mt-24">
        <NewToolsSection />
      </div>
      <div id="pricing" className="scroll-mt-24">
        <PricingSection />
      </div>
      <div id="testimonials" className="scroll-mt-24">
        <TestimonialsSection />
      </div>
      <div id="contact" className="scroll-mt-24">
        <FooterSection />
      </div>
      
      {/* Floating AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default App;