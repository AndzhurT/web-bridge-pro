import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";

// ── Shared UI ─────────────────────────────────────────────────────────

const BackButton = ({ onClick, label = "Back" }) => (
  <button
    onClick={onClick}
    className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group text-sm"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1 group-hover:-translate-x-0.5 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    {label}
  </button>
);

// ── Vendor Landing ────────────────────────────────────────────────────

const VendorLanding = ({ onAdPartner, onIntPartner }) => (
  <div className="text-center max-w-2xl mx-auto">
    <div className="w-20 h-20 bg-[#FF8700] rounded-full flex items-center justify-center mx-auto mb-8">
      <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Vendor Resources
    </h1>
    <p className="text-gray-300 text-lg leading-relaxed mb-12">
      Partner with Web Bridge Pro to reach thousands of independent auto dealers
      across the country. Whether you want to increase visibility for your services
      or build a deep technical integration, we offer partnership options tailored
      to your business goals.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onAdPartner}
        className="px-10 py-4 border-2 border-[#F49F1C] text-[#F49F1C] rounded-full hover:bg-[#F49F1C] hover:text-black transition-all duration-200 text-lg inline-flex items-center justify-center gap-2"
      >
        Advertising Partner
        <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full leading-tight">
          Free
        </span>
      </button>
      <button
        onClick={onIntPartner}
        className="px-10 py-4 bg-[#F49F1C] text-black rounded-full hover:bg-[#EC8C66] transition-all duration-200 text-lg"
      >
        Integration Partner
      </button>
    </div>
  </div>
);

// ── Advertising Partner ───────────────────────────────────────────────

const AD_TIERS = [
  {
    name: "Basic Listing",
    price: "Free",
    note: "No credit card required",
    features: [
      "Company name & logo in marketplace",
      "Link to your website",
      "Basic category listing",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Featured Listing",
    price: "Contact Us",
    note: "Custom pricing",
    features: [
      "Everything in Basic",
      "Priority placement in category",
      "Enhanced company profile",
      "Monthly performance report",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
  {
    name: "Sponsored Listing",
    price: "Contact Us",
    note: "Custom pricing",
    features: [
      "Everything in Featured",
      "Homepage spotlight rotation",
      "Targeted dealer notifications",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlight: true,
  },
  {
    name: "Premium Listing",
    price: "Contact Us",
    note: "Custom pricing",
    features: [
      "Everything in Sponsored",
      "Exclusive category placement",
      "Co-branded marketing materials",
      "Quarterly strategy reviews",
      "Custom landing page",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const AdPartnerSection = ({ onBack, onContactUs }) => (
  <div className="max-w-4xl mx-auto">
    <BackButton onClick={onBack} />
    <h2 className="text-3xl font-bold text-white mb-3">Advertising Partner</h2>
    <p className="text-gray-400 mb-8">
      Get your brand in front of thousands of independent dealers.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {AD_TIERS.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-2xl p-6 border-2 transition-colors ${
            tier.highlight
              ? "border-[#F49F1C] bg-gray-900"
              : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
          }`}
        >
          {tier.highlight && (
            <span className="text-xs font-bold text-[#F49F1C] uppercase tracking-wide">
              Popular
            </span>
          )}
          <h3 className="text-xl font-bold text-white mt-1">{tier.name}</h3>
          <p className="text-[#F49F1C] font-semibold text-2xl mt-1">{tier.price}</p>
          <p className="text-gray-500 text-xs mb-5">{tier.note}</p>
          <ul className="space-y-3 mb-6">
            {tier.features.map((f, i) => (
              <li key={i} className="flex items-start text-gray-300 text-sm">
                <svg
                  className="w-4 h-4 text-[#F49F1C] mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={tier.cta.toLowerCase().includes("contact") ? onContactUs : undefined}
            className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
              tier.highlight
                ? "bg-[#F49F1C] text-black hover:bg-[#EC8C66]"
                : "border-2 border-gray-700 text-white hover:border-[#F49F1C] hover:text-[#F49F1C]"
            }`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  </div>
);

// ── Integration Partner (placeholder) ─────────────────────────────────

const IntPartnerSection = ({ onBack, onContactUs }) => (
  <div className="max-w-2xl mx-auto">
    <BackButton onClick={onBack} />
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-gray-800">
        <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Integration Partner</h2>
      <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
        Deep technical integrations with Web Bridge Pro are coming soon.
        We&apos;re building the tools and APIs to make seamless vendor
        integration possible.
      </p>
      <div className="mt-10 bg-gray-900 rounded-2xl p-8 max-w-sm mx-auto border border-gray-800">
        <p className="text-[#F49F1C] font-semibold text-lg mb-2">Interested in early access?</p>
        <p className="text-gray-400 text-sm mb-6">
          Contact us to discuss integration partnership opportunities.
        </p>
        <button
          type="button"
          onClick={onContactUs}
          className="inline-block px-8 py-3 bg-[#F49F1C] text-black rounded-full font-semibold hover:bg-[#EC8C66] transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

// ── Page Component ────────────────────────────────────────────────────

const VendorResources = () => {
  const [view, setView] = useState("landing");
  const isFirstRender = useRef(true);
  const navigate = useNavigate();

  const handleContactToEnroll = () => {
    navigate("/dealer-resources", { state: { openEnroll: true } });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: "rgba(255, 135, 0, 0.12)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20">
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-12 group text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div key={view} className="wb-view-enter">
            {view === "landing" && (
              <VendorLanding
                onAdPartner={() => setView("adPartner")}
                onIntPartner={() => setView("intPartner")}
              />
            )}
            {view === "adPartner" && (
              <AdPartnerSection
                onBack={() => setView("landing")}
                onContactUs={handleContactToEnroll}
              />
            )}
            {view === "intPartner" && (
              <IntPartnerSection
                onBack={() => setView("landing")}
                onContactUs={handleContactToEnroll}
              />
            )}
          </div>
        </div>
      </div>

      <FooterSection onContactUs={handleContactToEnroll} />
    </div>
  );
};

export default VendorResources;
