import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const marqueeRef = useRef(null);
  
  const brands = [
    "carmax.png",
    "manheim.png",
    "cartuul.png", 
    "acv_auction.png",
    "dropbox.png",
    "gmail.png",
    // "carfax.png",
    "dejavoo.png",
    // "triple_a_auction.png",
    "vin_solutions.png",
  ];

  useEffect(() => {
    const marqueeContent = marqueeRef.current;
    if (marqueeContent) {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
      
      for(let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%),
            url('/images/hero-bg.jpg')
          `
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl mb-4 text-white max-w-2xl">
            Smarter Workflows for Independent Dealers
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mb-10">
            AI-Powered Browser Integrations That Save You Time, Eliminates Errors, and Drive Growth
          </p>
          <div className="space-x-4 mt-10 mb-10">
            <a
              href="#contact"
              className="bg-[#F49F1C] text-black px-10 py-3 rounded-full hover:bg-[#EC8C66] transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="#features"
              className="border border-white px-10 py-3 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <div className="bg-black py-16 mt-10">
        <div className="text-center">
          <p className="text-sm text-gray-500 font-semibold">SUPPORTED BRANDS</p>
        </div>
        
        {/* Marquee Container */}
        <div className="marquee">
          <ul className="marquee-content" ref={marqueeRef}>
            {brands.map((brand, index) => (
              <li key={index}>
                <img 
                  src={`/brands/${brand}`} 
                  alt={brand.replace('.png', '')} 
                  className="filter invert contrast-0 saturate-0 brightness-150 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
            <p className="text-sm text-gray-500 font-semibold italic">
                Built with BPI Technology: Secure, Seamless, Smart
            </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;