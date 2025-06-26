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
    {
      name: "David Rodriguez",
      title: "Car Lot Owner",
      quote: "Before WebBridge Pro, managing multiple auction platforms was a nightmare. Now everything syncs perfectly with our DMS, and we can track bids, manage inventory, and handle financing all from one place. Our efficiency has increased by 300%!",
      avatar: "/testimonials/sarah_thompson.png"
    },
    {
      name: "Lisa Martinez",
      title: "Dealership Operations Manager",
      quote: "The ChatGPT integration is brilliant! It helps us respond to customer inquiries instantly and generates detailed vehicle descriptions automatically. Our sales team loves how it handles routine questions while they focus on closing deals.",
      avatar: "/testimonials/emily_parker.png"
    },
    {
      name: "Robert Johnson",
      title: "Used Car Sales Director",
      quote: "WebBridge Pro's connection to state dealer associations has streamlined our compliance reporting. What used to take days of paperwork now happens automatically. The peace of mind knowing we're always compliant is invaluable.",
      avatar: "/testimonials/john_roberts.png"
    },
    {
      name: "Amanda Foster",
      title: "Automotive Finance Manager",
      quote: "The unlimited lender integrations in the Platinum plan have revolutionized our financing process. We can compare rates from dozens of lenders instantly and get approvals in minutes instead of hours. Our customers are amazed!",
      avatar: "/testimonials/sarah_thompson.png"
    },
    {
      name: "Carlos Gutierrez",
      title: "Multi-Location Dealer Principal",
      quote: "Managing 5 dealership locations was chaos before WebBridge Pro. Now I have real-time visibility across all locations, unified reporting, and centralized inventory management. It's like having a command center for my entire operation.",
      avatar: "/testimonials/michael_chen.jpg"
    }
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

  const snapToNearestGroup = () => {
    const container = containerRef.current;
    if (!container) return;
    
    const cardWidth = 320;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const scrollLeft = container.scrollLeft;
    
    // Very sensitive threshold for snapping (15% threshold)
    const currentTestimonialIndex = Math.floor((scrollLeft + totalCardWidth * 0.15) / totalCardWidth);
    const dotIndex = Math.floor(currentTestimonialIndex / 3);
    const validDotIndex = Math.max(0, Math.min(2, dotIndex)); // 3 dots (0-2)
    
    // Calculate the exact scroll position for this group
    const targetScrollPosition = validDotIndex * 3 * totalCardWidth;
    
    // Smooth scroll to the target position
    container.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth'
    });
    
    setCurrentSlide(validDotIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
    // Snap to nearest group after mouse drag ends (faster response)
    setTimeout(() => {
      snapToNearestGroup();
    }, 50);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Increased sensitivity from 2 to 3
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest group after touch drag ends (faster response)
    setTimeout(() => {
      snapToNearestGroup();
    }, 50);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // Increased sensitivity for mobile
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDotClick = (dotIndex) => {
    const container = containerRef.current;
    const cardWidth = 320; // Fixed card width
    const gap = 32; // 8 * 4px (gap-8)
    const totalCardWidth = cardWidth + gap;
    
    // Each dot represents 3 testimonials
    const startingTestimonialIndex = dotIndex * 3;
    setCurrentSlide(dotIndex);
    
    // Calculate scroll position to show the first card of the group
    const scrollPosition = startingTestimonialIndex * totalCardWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDragging) return; // Don't update dots while dragging
      
      const container = containerRef.current;
      if (!container) return;
      
      const cardWidth = 320;
      const gap = 32;
      const totalCardWidth = cardWidth + gap;
      
      // Calculate which group of 3 testimonials is being viewed (very sensitive threshold)
      const scrollLeft = container.scrollLeft;
      const currentTestimonialIndex = Math.floor((scrollLeft + totalCardWidth * 0.05) / totalCardWidth);
      const dotIndex = Math.floor(currentTestimonialIndex / 3);
      
      // Ensure dot index is within bounds (0-2) for 3 dots
      const validDotIndex = Math.max(0, Math.min(2, dotIndex));
      
      if (validDotIndex !== currentSlide) {
        setCurrentSlide(validDotIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isDragging, currentSlide]);

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
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none transition-all duration-300"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            <div className="flex gap-8 w-max transition-all duration-500 ease-out">
              {testimonials.map(({ name, title, quote, avatar }, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-80 flex-shrink-0 flex flex-col mb-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                  style={{ 
                    scrollSnapAlign: i % 3 === 0 ? 'start' : 'none'
                  }}
                >
                  <p className="text-gray-700 mb-6 text-left leading-relaxed flex-grow transition-colors duration-200 hover:text-gray-800">{quote}</p>
                  
                  <div className="flex items-center mt-auto">
                    <img 
                      src={avatar} 
                      alt={name}
                      className="w-12 h-12 rounded-full mr-4 object-cover transition-transform duration-200 hover:scale-110"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-black transition-colors duration-200">{name}</p>
                      <p className="text-[#FF8700] text-sm transition-colors duration-200">{title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Carousel Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
                currentSlide === index 
                  ? "w-8 bg-black shadow-md" 
                  : "w-2 bg-gray-300 hover:bg-gray-400 hover:shadow-sm"
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
