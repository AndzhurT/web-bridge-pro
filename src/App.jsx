import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DealerResources from "./pages/DealerResources";
import VendorResources from "./pages/VendorResources";
import ChatBot from "./components/ChatBot";
import EnrollmentForm from "./components/EnrollmentForm";

const App = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar onContactClick={() => setIsEnrollmentOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={<HomePage onContactClick={() => setIsEnrollmentOpen(true)} />}
        />
        <Route path="/dealer-resources" element={<DealerResources />} />
        <Route path="/vendor-resources" element={<VendorResources />} />
      </Routes>
      <EnrollmentForm
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
      <ChatBot />
    </div>
  );
};

export default App;
