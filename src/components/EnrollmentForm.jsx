import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

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
      } catch (apiError) {
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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-300 ${
        isAnimating ? 'bg-black bg-opacity-75' : 'bg-black bg-opacity-0'
      }`}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div 
        className={`relative bg-gray-900 rounded-2xl max-w-3xl w-full my-8 border-2 border-[#F49F1C] max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
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
        </button>

        {/* Form Header */}
        <div className="bg-gray-800 p-8 rounded-t-2xl border-b-2 border-[#F49F1C]">
          <h2 className="text-3xl font-bold text-white">Enrollment Form</h2>
          <p className="text-gray-300 mt-2">Join the Web Bridge Pro network</p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Required Fields Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Basic Information <span className="text-[#F49F1C]">*Required</span>
            </h3>

            <div>
              <label className="block text-gray-300 mb-2">
                Dealership Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="dealership"
                value={formData.dealership}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                placeholder="Enter dealership name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                placeholder="Enter complete address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Number of Locations <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="numberOfLocations"
                  value={formData.numberOfLocations}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="1"
                />
              </div>
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className="space-y-4 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Additional Information <span className="text-gray-500">(Optional)</span>
            </h3>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                placeholder="email@dealership.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Number of Users</label>
                <input
                  type="number"
                  name="numberOfUsers"
                  value={formData.numberOfUsers}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">DMS Platform</label>
                <input
                  type="text"
                  name="dmsPlatform"
                  value={formData.dmsPlatform}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="e.g., VinSolutions"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">CRM Platform</label>
                <input
                  type="text"
                  name="crmPlatform"
                  value={formData.crmPlatform}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="e.g., Salesforce"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Website Host</label>
                <input
                  type="text"
                  name="websiteHost"
                  value={formData.websiteHost}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="e.g., Dealer.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Accounting</label>
                <input
                  type="text"
                  name="accounting"
                  value={formData.accounting}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="e.g., QuickBooks"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Payroll Portal</label>
                <input
                  type="text"
                  name="payrollPortal"
                  value={formData.payrollPortal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="e.g., ADP"
                />
              </div>
            </div>
          </div>

          {/* Inventory Workflow Section */}
          <div className="space-y-4 pt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={() => toggleSection("inventoryWorkflow")}
              className="w-full flex items-center justify-between text-left bg-gray-800 hover:bg-gray-750 p-4 rounded-lg transition-all duration-200 hover:border-[#F49F1C] border-2 border-transparent"
            >
              <h3 className="text-xl font-semibold text-white">
                Inventory Workflow <span className="text-gray-500">(Optional)</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#F49F1C] transition-transform duration-300 ${
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
              <div className="pl-4 animate-slideDown">
                <p className="text-gray-400 text-sm mb-3">
                  List your inventory tools and services (e.g., Auctions, Transport, Floor Plans, History Reports, GPS Tracking, Valuations, Website Hosts)
                </p>
                <textarea
                  name="inventoryWorkflow"
                  value={formData.inventoryWorkflow}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="Example: Manheim Auctions, Central Dispatch, NextGear Floor Plan, Carfax, GoldStar GPS..."
                />
              </div>
            )}
          </div>

          {/* Deals Workflow Section */}
          <div className="space-y-4 pt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={() => toggleSection("dealsWorkflow")}
              className="w-full flex items-center justify-between text-left bg-gray-800 hover:bg-gray-750 p-4 rounded-lg transition-all duration-200 hover:border-[#F49F1C] border-2 border-transparent"
            >
              <h3 className="text-xl font-semibold text-white">
                Deals Workflow <span className="text-gray-500">(Optional)</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[#F49F1C] transition-transform duration-300 ${
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
              <div className="pl-4 animate-slideDown">
                <p className="text-gray-400 text-sm mb-3">
                  List your deals and finance tools (e.g., Credit Bureaus, Lenders, Warranty Providers, F&I Portals, State DMV, Compliance, CRM, Payment Processors)
                </p>
                <textarea
                  name="dealsWorkflow"
                  value={formData.dealsWorkflow}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#F49F1C] transition-colors"
                  placeholder="Example: Equifax, Chase Auto Finance, JM&A Warranty, DealerTrack F&I, Texas DMV..."
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-3 border-2 border-gray-600 rounded-full text-white hover:bg-gray-800 hover:border-[#F49F1C] transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#F49F1C] text-black font-semibold rounded-full hover:bg-[#EC8C66] transition-all duration-200 transform hover:scale-105"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
