// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import CitizenPortal from "./components/CitizenPortal";
import PoliticianPortal from "./components/PoliticianPortal";
import AdminDashboard from "./components/AdminDashboard";
import Response from "./components/Response";   // ✔ important!

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/citizen" element={<CitizenPortal />} />
        <Route path="/politician" element={<PoliticianPortal />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/response" element={<Response />} />   {/* Response portal */}
      </Routes>
    </Router>
  );
}

export default App;
