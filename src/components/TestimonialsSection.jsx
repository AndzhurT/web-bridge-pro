import React, { useState, useRef, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Thompson",
      title: "Independent Auto Dealer",
      quote: "WebBridge Pro has transformed our workflow! The instant DMS-to-vendor portal connection saves us hours each week, simplifying listings, syncing with vendors, handling our day-to-day, and it's all without leaving our browser!",
      avatar: "/testimonials/sarah_thompson.png"
    },
    {
      name: "John Roberts",
      title: "E-commerce Owner", 
      quote: "We tried various platforms before coming across WebBridge Pro, and none of them could match the level of personalization and ease of use that this software offers. The setup was quick, and the support team was there every step of the way!",
      avatar: "/testimonials/john_roberts.png"
    },
    {
      name: "Emily Parker",
      title: "Non-profit Coordinator",
      quote: "As a non-profit organization, our resources are limited, and we often have to rely on automations. WebBridge Pro lets me focus on sales instead of repetitive tasks and has been a game-changer for us.",
      avatar: "/testimonials/emily_parker.png"
    },
    {
      name: "Michael Chen",
      title: "Fleet Manager",
      quote: "The integration capabilities are incredible! We've connected our inventory management, customer CRM, and accounting software all through WebBridge Pro. What used to take our team hours of manual data entry now happens automatically in real-time.",
      avatar: "/testimonials/michael_chen.jpg" 
    },
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const cardWidth = 320; // Fixed card width
    const gap = 32; // 8 * 4px (gap-8)
    const totalCardWidth = cardWidth + gap;
    
    // Calculate scroll position to show 3 cards starting from the selected index
    let scrollPosition = 0;
    if (index > 0) {
      scrollPosition = (totalCardWidth * index) - (containerWidth - (cardWidth * 3 + gap * 2)) / 2;
    }
    
    container.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = 320;
      const gap = 32;
      const totalCardWidth = cardWidth + gap;
      
      // Calculate which testimonial is most centered
      const scrollLeft = container.scrollLeft;
      const centerPosition = scrollLeft + containerWidth / 2;
      const newSlide = Math.round((centerPosition - cardWidth / 2) / totalCardWidth);
      
      setCurrentSlide(Math.max(0, Math.min(testimonials.length - 1, newSlide)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="bg-white text-black py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Testimonial Badge */}
        <div className="inline-block bg-[#FF8700] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
          Testimonial
        </div>
        
        <h2 className="text-4xl font-bold mb-4">
          See what people are saying<br />
          about WebBridge Pro
        </h2>
        
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At WebBridge Pro, we take immense pride in delivering a cutting-edge browser integration solution 
          that empowers businesses to achieve unparalleled efficiency. But don't just take our word for it – 
          listen to what our valued users have to say about their experience with WebBridge Pro!
        </p>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto mb-8">
          <div 
            ref={containerRef}
            className="overflow-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 w-max transition-transform duration-300">
              {testimonials.map(({ name, title, quote, avatar }, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-80 flex-shrink-0 flex flex-col mb-6">
                  <p className="text-gray-700 mb-6 text-left leading-relaxed flex-grow">{quote}</p>
                  
                  <div className="flex items-center mt-auto ">
                    <img 
                      src={avatar} 
                      alt={name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-black">{name}</p>
                      <p className="text-[#FF8700] text-sm">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Carousel Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-8 bg-black" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
