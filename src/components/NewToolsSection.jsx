import React from "react";

const NewToolsSection = () => {
  return (
    <div id="tools" className="bg-black text-white px-4 md:px-8 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto">
        
        {/* First Section */}
        <section className="mb-20">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white">
              Intelligent automation at your fingertips
            </h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
          
          {/* Card 1 - Address Bar Integrations */}
          <div className="relative rounded-2xl flex flex-col overflow-hidden pt-4 pb-4">
            <div className="flex-1 mb-6">
              {/* Icon */}
              <div className="mb-4 text-left w-5 h-5 text-[#F49F1C]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                  role="img"
                >
                  <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl mb-6">
                Address Bar Integrations
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-7 max-w-[46ch]">
              Access critical vehicle and customer actions directly from your browser. Automatically detect VINs, emails, phone numbers, and customer data across any web page. 
              </p>
            </div>

            {/* Image with Overlapping Dialogs */}
            <div className="relative overflow-visible rounded-lg">
              {/* Base Image */}
              <img 
                src="/webbridge/WB_ABI_FullPage_Vehicle.JPG" 
                alt="Address Bar Integrations" 
                className="block w-full object-contain rounded-lg"
              />
              {/* Email Messages Dialog - Overlapping on Left */}
              <div className="absolute top-[10%] left-[3%] w-[42%] shadow-2xl z-10">
                <img 
                  src="/webbridge/WB_ABI_DialogZoom_Email.JPG" 
                  alt="Email Messages Dialog" 
                  className="w-full rounded-lg border border-gray-700"
                />
              </div>

              {/* Vehicle Actions Dialog - Top Left */}
              <div className="absolute top-[5%] right-[3%] w-[48%] shadow-2xl z-20">
                <img 
                  src="/webbridge/WB_ABI_DialogZoom_Vehicle.JPG" 
                  alt="Vehicle Actions Dialog" 
                  className="w-full rounded-lg border border-gray-700"
                />
              </div>
            
            </div>
          </div>

          {/* Card 2 - Specialized Window Hub */}
          <div className="relative rounded-2xl flex flex-col overflow-hidden pt-4 pb-4">
            <div className="flex-1 mb-6">
              {/* Icon */}
              <div className="mb-4 text-left w-5 h-5 text-[#F49F1C]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                  role="img"
                >
                  <path d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.75-7.22l-4.141 6.21L16.1 9.7l1.2-1.6 1.954 1.47 2.969-4.46 1.664 1.11z"></path>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl mb-6">
                Specialized Window Hub
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-7 max-w-[46ch]">
              Centralize all your dealership operations in one intelligent hub. One click opens contextual menus to check recalls, send emails, pull vehicle history, and more.
              </p>
            </div>

            {/* Image with Overlapping Windows - No Background */}
            <div className="relative overflow-visible rounded-lg" style={{ minHeight: '400px' }}>
              {/* Inventory Window - Bottom Layer */}
              <div className="absolute top-5 left-0 w-[90%] shadow-2xl z-10">
                <img 
                  src="/webbridge/WB_Hub_Inventory.JPG" 
                  alt="Inventory Hub"   
                  className="w-full rounded-lg border border-gray-700"
                />
              </div>
              
              {/* Contact Management Hub - Top Layer, Overlapping */}
              <div className="absolute top-[15%] left-[5%] w-[90%] shadow-2xl z-20">
                <img 
                  src="/webbridge/WB_Hub_Contact_Mgmt.JPG" 
                  alt="Contact Management Hub" 
                  className="w-full rounded-lg border border-gray-700"
                />
              </div>
            </div>
          </div>

          </div>
        </section>

        {/* Second Section */}
        <section className="mb-20">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white">
              Connect everything your dealership needs
            </h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
          
          {/* Card 3 - Smart DMS Marketplace */}
          <div className="relative rounded-2xl flex flex-col overflow-hidden pt-4 pb-4">
            <div className="flex-1 mb-6">
              {/* Icon */}
              <div className="mb-4 text-left w-5 h-5 text-[#F49F1C]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                  role="img"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl mb-6">
                Smart DMS Marketplace
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-7 max-w-[46ch]">
                Discover and integrate premium automotive tools and services in one curated marketplace. Browse verified vendors for finance, insurance, transport, marketing, and more. Everything is high quality and seamlessly integrated into your workflow.
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/webbridge/WB_SmartDMS_Marketplace.JPG" 
                alt="Smart DMS Marketplace" 
                className="block w-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Card 4 - Universal Integrations to Any Web Resources */}
          <div className="relative rounded-2xl flex flex-col overflow-hidden pt-4 pb-4">
            <div className="flex-1 mb-6">
              {/* Icon */}
              <div className="mb-4 text-left w-5 h-5 text-[#F49F1C]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                  role="img"
                >
                  <path d="M3 3v18h18v-2H5V3H3zm4 14h2V9H7v8zm4 0h2V5h-2v12zm4 0h2v-6h-2v6z"></path>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl mb-6">
                Universal Integrations to Any Web Resource
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg leading-7 max-w-[46ch]">
                Break free from platform limitations. Connect your DMS to any web resource through our flexible integration layer that works everywhere your business takes you.
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/webbridge/WB_Inventory_ListView.JPG" 
                alt="Universal Integrations to Any Web Resources" 
                className="block w-full object-contain rounded-lg"
              />
            </div>
          </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default NewToolsSection;