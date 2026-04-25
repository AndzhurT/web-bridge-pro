import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Paths", hash: "#hero" },
    { label: "Workflows", hash: "#features" },
    { label: "Platform", hash: "#tools" },
    { label: "Use Cases", hash: "#pricing" },
    { label: "Impact", hash: "#testimonials" },
  ];

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    closeMenu();

    if (hash === "#contact" && typeof onContactClick === "function") {
      onContactClick();
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactButtonClick = () => {
    closeMenu();

    if (typeof onContactClick === "function") {
      onContactClick();
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0d1418]/92 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2.5 transition-colors hover:border-[#f49f1c]/40 sm:px-4 sm:py-3"
          >
            <img
              src="/images/web_bridge.png"
              alt="WebBridgePro"
              className="h-6"
            />
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.hash}
                  onClick={(e) => handleNavClick(e, item.hash)}
                  className="rounded-full px-3 py-2 text-white/72 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white lg:px-4"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button size="sm" className="rounded-full" onClick={handleContactButtonClick}>
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "mt-3 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 pt-3 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col gap-2 pb-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash)}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-white/76 transition-colors duration-200 hover:border-[#f49f1c]/40 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleContactButtonClick}
              size="md"
              className="rounded-2xl"
            >
              Contact us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
