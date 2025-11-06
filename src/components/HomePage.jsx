import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Welcome to the Citizen Portal
        </div>
      </header>

      <div className="container">
        <h2>Home Page</h2>
        <p>Welcome! You have successfully logged in.</p>
        <button className="logout" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
