// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <img src="/images/WB-logo.png" alt="WebBridgePro" className="h-6" />
          <span className="text-xl font-bold text-white">WebBridgePro</span>
        </div>
        <nav className="space-x-12 text-sm">
          <a href="#features" className="text-white hover:text-yellow-400 transition">
            Features
          </a>
          <a href="#tools" className="text-white hover:text-yellow-400 transition">
            About us
          </a>
          <a href="#pricing" className="text-white hover:text-yellow-400 transition">
            Pricing
          </a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
