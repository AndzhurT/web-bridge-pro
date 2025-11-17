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
      <section className="relative bg-black overflow-hidden py-16 px-4 pt-40">
        {/* Orange Ellipse Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            background: 'rgba(255, 135, 0, 0.3)',
            opacity: 1,
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Content */}
          <div className="flex flex-col items-center text-center px-4 pt-20 pb-20">
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

          {/* Image */}
          <div className="relative px-4 pb-10 flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Shadow Layer Behind */}
              <div className="absolute inset-0 bg-[#F49F1C] opacity-20 blur-3xl rounded-lg transform translate-y-4 translate-x-4"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-800 shadow-2xl">
                <img 
                  src="/webbridge/WB_MainScreen.JPG" 
                  alt="Web Bridge Dashboard" 
                  className="w-full"
                />
                {/* Gradient Overlay on Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
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