import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
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

// ── Dealer Landing ────────────────────────────────────────────────────

const DealerLanding = ({ onWatchDemo, onEnroll }) => (
  <div className="text-center max-w-2xl mx-auto">
    <div className="w-20 h-20 bg-[#FF8700] rounded-full flex items-center justify-center mx-auto mb-8">
      <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Dealer Resources
    </h1>
    <p className="text-gray-300 text-lg leading-relaxed mb-12">
      Web Bridge Pro streamlines your dealership operations with AI-powered browser
      integrations. Connect your DMS, auction platforms, lending portals, and more —
      all from a single browser. Save hours every day and eliminate costly data-entry errors.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onWatchDemo}
        className="px-10 py-4 border-2 border-[#F49F1C] text-[#F49F1C] rounded-full hover:bg-[#F49F1C] hover:text-black transition-all duration-200 text-lg"
      >
        Watch Demo
      </button>
      <button
        onClick={onEnroll}
        className="px-10 py-4 bg-[#F49F1C] text-black rounded-full hover:bg-[#EC8C66] transition-all duration-200 text-lg"
      >
        Enroll Now
      </button>
    </div>
  </div>
);

// ── Watch Demo ────────────────────────────────────────────────────────

const WatchDemoSection = ({ onBack }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const demoVideos = [
    {
      id: 1,
      title: "Getting Started with Web Bridge Pro",
      duration: "2:30",
      thumbnail: "/webbridge/WB_MainScreen.JPG",
      src: "",
    },
    {
      id: 2,
      title: "Auction Integration Demo",
      duration: "3:15",
      thumbnail: "/webbridge/WB_MainScreen.JPG",
      src: "",
    },
    {
      id: 3,
      title: "DMS Workflow Automation",
      duration: "4:00",
      thumbnail: "/webbridge/WB_MainScreen.JPG",
      src: "",
    },
  ];

  if (activeVideo) {
    return (
      <div className="max-w-4xl mx-auto">
        <BackButton onClick={() => setActiveVideo(null)} label="All Videos" />
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video mb-6 border border-gray-800">
          {activeVideo.src ? (
            <video controls autoPlay className="w-full h-full object-contain" src={activeVideo.src} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-gray-700 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xl font-medium text-gray-400">Video Coming Soon</p>
              <p className="text-sm text-gray-600 mt-2">Check back for updates</p>
            </div>
          )}
        </div>
        <h3 className="text-white text-xl font-semibold">{activeVideo.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{activeVideo.duration}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton onClick={onBack} />
      <h2 className="text-3xl font-bold text-white mb-3">Watch Demo</h2>
      <p className="text-gray-400 mb-8">
        See Web Bridge Pro in action with these short walkthroughs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoVideos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className="group text-left rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-[#F49F1C]/50 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#F49F1C]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-medium group-hover:text-[#F49F1C] transition-colors">
                {video.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// ── Dealer Enrollment Form ────────────────────────────────────────────

const ENROLL_INITIAL = {
  dealershipName: "",
  address: "",
  website: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  numLocations: "",
  numEmployees: "",
  monthlySales: "",
  dealershipType: "",
};

const DealerEnrollSection = ({ onBack }) => {
  const [formData, setFormData] = useState(ENROLL_INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      try {
        const response = await fetch("/api/dealer-enrollment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert("Enrollment submitted successfully! We'll be in touch soon.");
          setFormData(ENROLL_INITIAL);
          onBack();
          return;
        }
      } catch (apiErr) {
        console.log("API not available, falling back to Supabase...", apiErr);
      }

      const { error } = await supabase.from("dealer_enrollments").insert([
        {
          dealership_name: formData.dealershipName,
          address: formData.address,
          website: formData.website,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          num_locations: formData.numLocations,
          num_employees: formData.numEmployees,
          monthly_sales: formData.monthlySales,
          dealership_type: formData.dealershipType,
          created_at: new Date().toISOString(),
        },
      ]);
      if (error) throw new Error(error.message);

      alert("Enrollment submitted successfully! We'll be in touch soon.");
      setFormData(ENROLL_INITIAL);
      onBack();
    } catch (err) {
      console.error("Enrollment error:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F49F1C] transition-colors";
  const labelCls = "block text-gray-300 mb-1.5 text-sm";

  return (
    <div className="max-w-3xl mx-auto">
      <BackButton onClick={onBack} />
      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <div className="bg-gray-800/50 p-8 border-b border-gray-800">
          <h2 className="text-3xl font-bold text-white">Dealer Enrollment</h2>
          <p className="text-gray-400 mt-2">
            Complete the form below to get started with Web Bridge Pro.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className={labelCls}>
              Dealership Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="dealershipName"
              value={formData.dealershipName}
              onChange={handleChange}
              required
              className={inputCls}
              placeholder="Enter dealership name"
            />
          </div>

          <div>
            <label className={labelCls}>
              Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={inputCls}
              placeholder="Full business address"
            />
          </div>

          <div>
            <label className={labelCls}>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={inputCls}
              placeholder="https://www.yourdealership.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelCls}>
                Contact Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="Full name"
              />
            </div>
            <div>
              <label className={labelCls}>
                Contact Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className={labelCls}>
                Contact Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>
                # Locations <span className="text-red-400">*</span>
              </label>
              <select
                name="numLocations"
                value={formData.numLocations}
                onChange={handleChange}
                required
                className={inputCls}
              >
                <option value="" disabled>Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5 or more</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>
                # Employees <span className="text-red-400">*</span>
              </label>
              <select
                name="numEmployees"
                value={formData.numEmployees}
                onChange={handleChange}
                required
                className={inputCls}
              >
                <option value="" disabled>Select...</option>
                <option value="1-5">1–5</option>
                <option value="6-10">6–10</option>
                <option value="11-20">11–20</option>
                <option value="21+">21+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>
                Monthly Sales <span className="text-red-400">*</span>
              </label>
              <select
                name="monthlySales"
                value={formData.monthlySales}
                onChange={handleChange}
                required
                className={inputCls}
              >
                <option value="" disabled>Select...</option>
                <option value="1-39">1–39</option>
                <option value="40-99">40–99</option>
                <option value="100+">100+</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>
                Dealership Type <span className="text-red-400">*</span>
              </label>
              <select
                name="dealershipType"
                value={formData.dealershipType}
                onChange={handleChange}
                required
                className={inputCls}
              >
                <option value="" disabled>Select...</option>
                <option value="Franchise">Franchise</option>
                <option value="Independent">Independent</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 px-6 py-3 border-2 border-gray-600 rounded-full text-white hover:bg-gray-800 hover:border-[#F49F1C] transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-3 bg-[#F49F1C] text-black font-semibold rounded-full hover:bg-[#EC8C66] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Enrollment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ── Page Component ────────────────────────────────────────────────────

const DealerResources = () => {
  const [view, setView] = useState("landing");
  const isFirstRender = useRef(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.openEnroll) return;

    setView("enrollForm");
    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

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
      {/* Background glow */}
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
              <DealerLanding
                onWatchDemo={() => setView("watchDemo")}
                onEnroll={() => setView("enrollForm")}
              />
            )}
            {view === "watchDemo" && (
              <WatchDemoSection onBack={() => setView("landing")} />
            )}
            {view === "enrollForm" && (
              <DealerEnrollSection onBack={() => setView("landing")} />
            )}
          </div>
        </div>
      </div>

      <FooterSection onContactUs={() => setView("enrollForm")} />
    </div>
  );
};

export default DealerResources;
