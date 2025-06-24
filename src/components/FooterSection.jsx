import React from "react";

const FooterSection = () => {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About us", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact us", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/webbridgepro",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/webbridgepro",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/webbridgepro",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:contact@webbridgepro.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Brand Section */}
          <div className="md:flex-1 md:pr-8 space-y-2">
            <img src="/images/web_bridge.png" alt="WebBridgePro" className="h-6" />
            <p className="text-gray-400 text-sm mb-4 max-w-sm">
              Empowering businesses with cutting-edge browser integration solutions for unparalleled efficiency.
            </p>
            <p className="text-xs text-gray-500">© WebBridge Pro Inc 2025</p>
          </div>

          {/* Right Column: Links and Social */}
          <div className="md:flex-shrink-0">
            <div>
              {/* Quick Links */}
              <h5 className="text-sm font-semibold mb-4 text-gray-300">Quick Links</h5>
              <div className="flex flex-row space-x-2 mb-8">
                {links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#FF8700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <h5 className="text-sm font-semibold mb-4 text-gray-300">Connect With Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF8700] transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Questions? Reach out anytime!
              </p>
            </div>
          </div>
        </div>

        {/* Divider and Additional Info */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>Built with care for automotive dealers and businesses worldwide.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
