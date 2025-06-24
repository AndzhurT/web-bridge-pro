import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Advanced Automation",
      desc: "Say goodbye to manual tasks and hello to efficiency! Our robust automation features allow you to automate inventory syncs, vendor portal updates, and more, streamlining your dealership operations."
    },
    {
      title: "Dynamic Personalization",
      desc: "Engage your customers like never before with personalized browser interactions tailored to their interests, behaviors, and preferences, enhancing your sales process."
    },
    {
      title: "Seamless Integrations",
      desc: "Connect effortlessly with your DMS and vendor portals using our instant, secure integration technology, eliminating the need for complex setups or APIs."
    }
  ];

  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-2xl md:text-4xl mb-6">
        Lots of extra features, <br /> enhancing your experience
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-12">
      With our AI-Powered browser, you can say goodbye to tedious, repetitive tasks and hello to efficiency and productivity.  WebBridge is the world’s 1st browser platform to empower you to Integrate and Automate every aspect of your dealership’s workflow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto my-40 justify-items-end">
        {features.map(({ title, desc }, i) => (
          <div key={i} className="bg-[#0B0B0B] p-6 rounded hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold text-xl mb-6 text-[#F49F1C]">{title}</h3>
              <p className="text-gray-400 mb-10">{desc}</p>
            </div>
            <img src={`/features/${title.toLowerCase().replace(/\s+/g, '_')}.png`} alt={title} className="w-3/4 h-auto mx-auto mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
