import React, { useState } from "react";

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

// Plan Comparison Modal Component
const PlanComparisonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const comparisonData = [
    { feature: "30-Day Free Trial", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Free Features", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Users", silver: "1", gold: "3", platinum: "5" },
    { feature: "Manheim Auction Integration to your DMS", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Access to 2025 SmartDMS marketplace", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "ChatGPT Integration", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Google CRM/Workspace Integration", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Connection to your State Dealer Association", silver: "✓", gold: "✓", platinum: "✓" },
    { feature: "Integrations of your choice", silver: "✗", gold: "3", platinum: "5" },
    { feature: "Unlimited Auction Integrations", silver: "✗", gold: "✓", platinum: "✓" },
    { feature: "Unlimited Lender & Loan Integrations", silver: "✗", gold: "✗", platinum: "✓" },
    { feature: "Priority Support", silver: "✗", gold: "✗", platinum: "✓" },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Compare Plans</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Silver ($99/mo)</th>
                  <th className="text-center py-3 px-4 font-semibold text-yellow-600">Gold ($399/mo)</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-800">Platinum ($599/mo)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.silver}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.gold}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{row.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button 
              onClick={onClose}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Call to Action Modal for Get Started
const CallToActionModal = ({ isOpen, onClose, selectedPlan }) => {
  const handleCallNow = () => {
    // Replace with your actual phone number
    window.location.href = 'tel:+1-215-532-1743';
  };

  const handleEmailInstead = () => {
    const emailSubject = `Interest in ${selectedPlan?.name} Plan - Web Bridge Pro`;
    const emailBody = `Hi,

I'm interested in the ${selectedPlan?.name} plan (${selectedPlan?.price}/month) and would like to discuss the details.

Please call me at your earliest convenience to discuss this plan and answer any questions I may have.

Best regards`;
    
    window.location.href = `mailto:ksimmons@autodealerpro.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Get Started</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#FF8700] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Ready for {selectedPlan?.name} Plan?
            </h4>
            <p className="text-gray-600 mb-4">
              Great choice! Let's discuss the {selectedPlan?.name} plan ({selectedPlan?.price}/month) and get you set up.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Call us now for immediate assistance:</strong>
            </p>
            <a 
              href="tel:+1-215-532-1743" 
              className="text-2xl font-bold text-[#FF8700] hover:text-[#EC8C66] transition-colors"
            >
              +1 (215) 532-1743
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Available Mon-Fri, 9AM-6PM EST
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCallNow}
              className="w-full bg-[#FF8700] text-white py-3 px-4 rounded-lg hover:bg-[#EC8C66] transition-colors font-semibold"
            >
              📞 Call Now
            </button>
            
            <button
              onClick={handleEmailInstead}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              ✉️ Email Instead
            </button>
            
            <button
              onClick={onClose}
              className="w-full text-gray-500 py-2 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Button click handlers
  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setShowCallToAction(true);
  };

  const handleComparePlans = () => {
    setShowComparison(true);
  };

  const handleTalkToSales = () => {
    const emailSubject = 'Sales Inquiry - Web Bridge Pro';
    const emailBody = `Hi,

I would like to discuss pricing plans and learn more about Web Bridge Pro.

Please contact me to schedule a consultation.

Best regards`;
    
    // Open email client with pre-filled content
    window.location.href = `mailto:ksimmons@autodealerpro.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const plans = [
    {
      name: "Silver",
      price: "$99",
      features: [
        { text: "All Free Features", active: true },
        { text: "1 User", active: true },
        { text: "Chat GPT Intergration", active: true },
        { text: "Access to SmartDMS marketplace", active: true },
        { text: "Integrations", active: false },
        { text: "Unlimited Auction integrations", active: false },
        { text: "Unlimited Lender & Loan integrations", active: false },
      ],
      buttonClass: "bg-gray-800 hover:bg-gray-700",
    },
    {
      name: "Gold",
      price: "$399",
      features: [
        { text: "All Free Features", active: true },
        { text: "3 Users", active: true },
        { text: "Chat GPT Intergration", active: true },
        { text: "Access to SmartDMS marketplace", active: true },
        { text: "3 Integrations", active: true },
        { text: "Unlimited Auction integrations", active: true },
        { text: "Unlimited Lender & Loan integrations", active: false },
      ],
      buttonClass: "bg-yellow-400 text-black font-semibold hover:bg-yellow-300",
    },
    {
      name: "Platinum",
      price: "$599",
      features: [
        { text: "All Free Features", active: true },
        { text: "5 Users", active: true },
        { text: "Chat GPT Intergration", active: true },
        { text: "Access to SmartDMS marketplace", active: true },
        { text: "5 Integrations", active: true },
        { text: "Unlimited Auction integrations", active: true },
        { text: "Unlimited Lender & Loan integrations", active: true },
      ],
      buttonClass: "bg-gray-800 hover:bg-gray-700",
    },
  ];

  return (
    <>
      <section className="bg-black text-white py-16 mt-20 text-center">
        <h2 className="text-4xl mb-6">
          One Browser. Endless Integrations.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-24">
          We believe in providing top-notch services to cater to your unique requirements. That's why we offer a range of carefully crafted pricing plans designed to suit businesses of all sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1600px] mx-auto px-8 min-h-164 py-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-to-br from-[#FF8700] to-[#EC8C66] min-w-[300px]"
            >
              <div className="bg-black p-8 rounded-2xl h-full">
                <h3 className="text-sm mb-4 text-left">{plan.name}</h3>
                <p className="mb-12 text-left text-4xl">{plan.price}<span className="text-sm font-normal">/month</span></p>
                <p className="text-left text-sm text-[#FF8700] font-medium -mt-10 mb-8">30-Day Free Trial</p>
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
                  onClick={() => handleGetStarted(plan)}
                  className="mt-16 w-full py-3 rounded-2xl transition-colors duration-200 hover:bg-[#FF8700] hover:text-black border border-white/20"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={handleComparePlans}
            className="bg-[#FF8700] text-black px-6 py-3 rounded-2xl hover:bg-[#EC8C66] transition-colors duration-200 w-44"
          >
            Compare Plans
          </button>
          <button 
            onClick={handleTalkToSales}
            className="bg-black border border-white text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-colors duration-200 w-44"
          >
            Talk to Sales
          </button>
        </div>
      </section>

      {/* Modals */}
      <PlanComparisonModal 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
      />
      
      <CallToActionModal 
        isOpen={showCallToAction} 
        onClose={() => setShowCallToAction(false)} 
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default PricingSection;