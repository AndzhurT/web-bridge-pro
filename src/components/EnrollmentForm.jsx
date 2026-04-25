import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Button from "./ui/Button";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white placeholder:text-white/34 transition-colors focus:border-[#f49f1c]/70 focus:outline-none focus:ring-2 focus:ring-[#f49f1c]/20";
const labelClass = "mb-2 block text-sm font-medium text-white/72";
const sectionClass = "space-y-4 border-t border-white/10 pt-5";
const toggleClass =
  "flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-left transition-colors duration-200 hover:border-[#f49f1c]/45 hover:bg-white/[0.07]";

const EnrollmentForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Required fields
    dealership: "",
    contactName: "",
    address: "",
    phone: "",
    numberOfLocations: "",
    // Optional fields
    email: "",
    numberOfUsers: "",
    dmsPlatform: "",
    crmPlatform: "",
    websiteHost: "",
    accounting: "",
    payrollPortal: "",
    // Inventory Workflow - text fields
    inventoryWorkflow: "",
    // Deals Workflow - text fields
    dealsWorkflow: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    inventoryWorkflow: false,
    dealsWorkflow: false,
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Transform camelCase to snake_case for database
      const enrollmentData = {
        dealership: formData.dealership,
        contact_name: formData.contactName,
        address: formData.address,
        phone: formData.phone,
        number_of_locations: formData.numberOfLocations,
        email: formData.email,
        number_of_users: formData.numberOfUsers,
        dms_platform: formData.dmsPlatform,
        crm_platform: formData.crmPlatform,
        website_host: formData.websiteHost,
        accounting: formData.accounting,
        payroll_portal: formData.payrollPortal,
        inventory_workflow: formData.inventoryWorkflow,
        deals_workflow: formData.dealsWorkflow,
        created_at: new Date().toISOString(),
      };

      // Try Vercel API first (for production)
      try {
        const response = await fetch('/api/enrollment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Saved via API:', result);
          alert("Enrollment form submitted successfully! We'll be in touch soon.");
          handleClose();
          // Reset form
          setFormData({
            dealership: "",
            contactName: "",
            address: "",
            phone: "",
            numberOfLocations: "",
            email: "",
            numberOfUsers: "",
            dmsPlatform: "",
            crmPlatform: "",
            websiteHost: "",
            accounting: "",
            payrollPortal: "",
            inventoryWorkflow: "",
            dealsWorkflow: "",
          });
          return;
        }
      } catch {
        console.log('API not available (local dev mode), using direct Supabase connection...');
      }

      // Fallback to direct Supabase (for local development)
      const { data, error } = await supabase
        .from('enrollments')
        .insert([enrollmentData])
        .select();

      if (error) {
        throw new Error(error.message);
      }

      console.log('Saved to Supabase:', data);
      alert("Enrollment form submitted successfully! We'll be in touch soon.");
      handleClose();
      
      // Reset form
      setFormData({
        dealership: "",
        contactName: "",
        address: "",
        phone: "",
        numberOfLocations: "",
        email: "",
        numberOfUsers: "",
        dmsPlatform: "",
        crmPlatform: "",
        websiteHost: "",
        accounting: "",
        payrollPortal: "",
        inventoryWorkflow: "",
        dealsWorkflow: "",
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error: ${error.message}\n\nPlease check the console for details.`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 transition-opacity duration-300 ${
        isAnimating ? 'bg-black/80' : 'bg-black/0'
      }`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div
        className={`relative my-6 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-[#f49f1c]/35 bg-[#0d1418] shadow-2xl shadow-black/40 transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 rounded-xl"
          aria-label="Close enrollment form"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>

        {/* Form Header */}
        <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(244,159,28,0.18),rgba(255,255,255,0.04))] p-6 md:p-8">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f49f1c]">
            Request access
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Enrollment Form
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/68">
            Join the Web Bridge Pro network.
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
          {/* Required Fields Section */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Basic Information <span className="text-[#f49f1c]">*Required</span>
            </h3>

            <div>
              <label className={labelClass}>
                Dealership Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="dealership"
                value={formData.dealership}
                onChange={handleInputChange}
                required
                className={fieldClass}
                placeholder="Enter dealership name"
              />
            </div>

            <div>
              <label className={labelClass}>
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className={fieldClass}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className={labelClass}>
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                className={fieldClass}
                placeholder="Enter complete address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className={labelClass}>
                  Number of Locations <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="numberOfLocations"
                  value={formData.numberOfLocations}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className={fieldClass}
                  placeholder="1"
                />
              </div>
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className={sectionClass}>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Additional Information <span className="text-white/42">(Optional)</span>
            </h3>

            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={fieldClass}
                placeholder="email@dealership.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Number of Users</label>
                <input
                  type="number"
                  name="numberOfUsers"
                  value={formData.numberOfUsers}
                  onChange={handleInputChange}
                  min="1"
                  className={fieldClass}
                  placeholder="5"
                />
              </div>

              <div>
                <label className={labelClass}>DMS Platform</label>
                <input
                  type="text"
                  name="dmsPlatform"
                  value={formData.dmsPlatform}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="e.g., VinSolutions"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>CRM Platform</label>
                <input
                  type="text"
                  name="crmPlatform"
                  value={formData.crmPlatform}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="e.g., Salesforce"
                />
              </div>

              <div>
                <label className={labelClass}>Website Host</label>
                <input
                  type="text"
                  name="websiteHost"
                  value={formData.websiteHost}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="e.g., Dealer.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Accounting</label>
                <input
                  type="text"
                  name="accounting"
                  value={formData.accounting}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="e.g., QuickBooks"
                />
              </div>

              <div>
                <label className={labelClass}>Payroll Portal</label>
                <input
                  type="text"
                  name="payrollPortal"
                  value={formData.payrollPortal}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="e.g., ADP"
                />
              </div>
            </div>
          </div>

          {/* Inventory Workflow Section */}
          <div className={sectionClass}>
            <button
              type="button"
              onClick={() => toggleSection("inventoryWorkflow")}
              className={toggleClass}
            >
              <h3 className="text-xl font-semibold text-white">
                Inventory Workflow <span className="text-white/42">(Optional)</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#f49f1c] transition-transform duration-300 ${
                  expandedSections.inventoryWorkflow ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSections.inventoryWorkflow && (
              <div className="animate-slideDown pl-2 md:pl-4">
                <p className="mb-3 text-sm leading-6 text-white/62">
                  List your inventory tools and services (e.g., Auctions, Transport, Floor Plans, History Reports, GPS Tracking, Valuations, Website Hosts)
                </p>
                <textarea
                  name="inventoryWorkflow"
                  value={formData.inventoryWorkflow}
                  onChange={handleInputChange}
                  rows="4"
                  className={fieldClass}
                  placeholder="Example: Manheim Auctions, Central Dispatch, NextGear Floor Plan, Carfax, GoldStar GPS..."
                />
              </div>
            )}
          </div>

          {/* Deals Workflow Section */}
          <div className={sectionClass}>
            <button
              type="button"
              onClick={() => toggleSection("dealsWorkflow")}
              className={toggleClass}
            >
              <h3 className="text-xl font-semibold text-white">
                Deals Workflow <span className="text-white/42">(Optional)</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#f49f1c] transition-transform duration-300 ${
                  expandedSections.dealsWorkflow ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSections.dealsWorkflow && (
              <div className="animate-slideDown pl-2 md:pl-4">
                <p className="mb-3 text-sm leading-6 text-white/62">
                  List your deals and finance tools (e.g., Credit Bureaus, Lenders, Warranty Providers, F&I Portals, State DMV, Compliance, CRM, Payment Processors)
                </p>
                <textarea
                  name="dealsWorkflow"
                  value={formData.dealsWorkflow}
                  onChange={handleInputChange}
                  rows="4"
                  className={fieldClass}
                  placeholder="Example: Equifax, Chase Auto Finance, JM&A Warranty, DealerTrack F&I, Texas DMV..."
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row">
            <Button
              type="button"
              onClick={handleClose}
              variant="outline"
              size="lg"
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              className="flex-1 rounded-full"
            >
              Submit Enrollment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
