import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PortalSelection from "./components/PortalSelection";
import CitizenPortal from "./components/CitizenPortal";
import PoliticianPortal from "./components/PoliticianPortal";
import AdminDashboard from "./components/AdminDashboard";
import PoliticianResponse from "./components/PoliticianResponse"; // ✅ correct import
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/portal" element={<PortalSelection />} />
          <Route path="/citizen" element={<CitizenPortal />} />
          <Route path="/politician" element={<PoliticianPortal />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/politician-response" element={<PoliticianResponse />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
