import React from "react";

const CheckIcon = ({ color = "#F49F1C", className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="16px" 
    viewBox="0 -960 960 960" 
    width="16px" 
    className={className}
  >
    {/* Orange circle background */}
    <circle cx="480" cy="-480" r="400" fill={color} />
    {/* Black checkmark */}
    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Z" fill="black" />
  </svg>
);

const PricingSection = () => {
  const plans = [
    {
      name: "Silver",
      price: "$199",
      features: [
        { text: "All Free Features", active: true },
        { text: "5 Integrations", active: true },
        { text: "5 Users", active: true },
        { text: "Two Locations", active: false },
        { text: "No Server Side Automations", active: false }
      ],
      buttonClass: "bg-gray-800 hover:bg-gray-700",
    },
    {
      name: "Gold",
      price: "$399",
      features: [
        { text: "All Free Features", active: true },
        { text: "10 Integrations", active: true },
        { text: "10 Users", active: true },
        { text: "Multiple Locations", active: true },
        { text: "2 Server Side Automations", active: true }
      ],
      buttonClass: "bg-yellow-400 text-black font-semibold hover:bg-yellow-300",
    },
    {
      name: "Platinum",
      price: "$599",
      features: [
        { text: "All Free Features", active: true },
        { text: "15 Integrations", active: true },
        { text: "15 Users", active: true },
        { text: "Multiple Locations", active: true },
        { text: "4 Server Side Automations", active: true }
      ],
      buttonClass: "bg-gray-800 hover:bg-gray-700",
    },
  ];

  return (
    <section className="bg-black text-white py-16 mt-20 text-center">
      <h2 className="text-4xl mb-6">
        One Browser. Endless Integrations.
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-42">
        We believe in providing top-notch services to cater to your unique requirements. That's why we offer a range of carefully crafted pricing plans designed to suit businesses of all sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 min-h-164 py-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="p-[1px] rounded-2xl bg-gradient-to-br from-[#FF8700] to-[#EC8C66] min-w-[300px]"
          >
            <div className="bg-black p-8 rounded-2xl h-full">
              <h3 className="text-sm mb-4 text-left">{plan.name}</h3>
              <p className="mb-12 text-left text-4xl">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="text-left space-y-8 mb-8 text-white text-sm font-light">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckIcon 
                      color={feature.active ? "#F49F1C" : "#3A3A3A"} 
                      className="flex-shrink-0 w-6 h-6"
                    />
                    <span className={feature.active ? "" : "text-gray-600"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-16 w-full py-3 rounded-2xl transition-colors duration-200 hover:bg-[#FF8700] hover:text-black border border-white/20"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-[#FF8700] text-black px-6 py-3 rounded-2xl hover:bg-[#EC8C66] transition-colors duration-200 w-44">
          Compare Plans
        </button>
        <button className="bg-black border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-colors duration-200 w-44">
          Talk to Sales
        </button>
      </div>
    </section>
  );
};

export default PricingSection;