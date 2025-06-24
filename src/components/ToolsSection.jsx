import React from "react";

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-[#FFFFFF] text-[#F49F1C] px-4 md:px-6">
      <div className="mx-auto text-center">
        {/* --- Top Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Box */}
          <div className="flex flex-col items-start bg-[#F7F7F7] p-6 md:p-10 w-full md:w-1/2 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">All-in-one Place</h2>
            <p className="mb-8 text-black max-w-md text-left text-lg">
              Manage emails, videos, auctions, payments, and more from multiple
              providers
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <img src="/tools/image.png" alt="tools" className="w-full md:w-1/2 h-auto" />
            </div>
          </div>

          {/* Right Box (with icons) */}
          <div className="mt-10 md:mt-0 flex flex-col gap-8 md:gap-16 text-left w-full md:w-1/2">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-[#F49F1C] p-3 rounded-full h-12 w-12 flex items-center justify-center">
                <img
                  src="/tools/fast_and_simple.png"
                  alt="Fast and Simple"
                  className="h-6 w-auto"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Fast and Simple
                </h3>
                <p className="text-gray-600 mt-1">
                  No more copy-pasting. No more repetitive clicks. Just fast,
                  intelligent automation between your DMS and all your vendor
                  portals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-[#F49F1C] p-3 rounded-full h-12 w-12 flex items-center justify-center">
                <img
                  src="/tools/optimized_devices.png"
                  alt="Optimized for all Devices"
                  className="h-6 w-auto"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Optimized for all Devices
                </h3>
                <p className="text-gray-600 mt-1">
                  Enjoy a seamless experience across desktops, tablets, and
                  smartphones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-[#F49F1C] p-3 rounded-full h-12 w-12 flex items-center justify-center">
                <img
                  src="/tools/test_and_iterate.png"
                  alt="Test and Iterate"
                  className="h-6 w-auto"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black">
                  Test and Iterate
                </h3>
                <p className="text-gray-600 mt-1">
                  Tailor your dealership processes with our flexible tools,
                  allowing you to adapt and refine your workflow to suit your
                  unique business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
          <div className="flex flex-col text-center md:text-left md:ml-10 order-2 md:order-1">
            <h2 className="text-4xl mb-4">Backed by Giants</h2>
            <p className="mb-8 text-black max-w-md text-2lg">
              Microsoft and Apple Certified! Built from the ground up to serve both Franchise and Inpendent Auto Dealerships nationwide!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center bg-[#F7F7F7] p-6 md:pl-10 md:pr-10 w-full md:w-1/2 rounded-lg order-1 md:order-2">
            <div className="flex flex-col pt-4 md:pt-10 pb-5">
              <h2 className="text-2xl font-bold mb-4 text-left">Automated</h2>
              <p className="mb-8 text-black max-w-md text-left text-lg">
                Sync your tools and vendors, letting your benefits and workflows
                operate seamlessly on autopilot.
              </p>
            </div>
            <img
              src="/tools/image_1.png"
              alt="tools"
              className="w-full md:w-1/2 h-auto py-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
