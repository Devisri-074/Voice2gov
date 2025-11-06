import React from "react";
import { useNavigate } from "react-router-dom";

function PortalSelection() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Improving Interaction Between Citizens and Politicians
        </div>
      </header>

      <div className="container portal-container">
        <h2>Select Your Portal</h2>

        <div className="portal-grid">
          <button className="portal-btn" onClick={() => navigate("/citizen")}>
            Citizen
          </button>
          <button className="portal-btn" onClick={()=>navigate("/Politician")}>
            Politician
          </button>
          <button className="portal-btn" onClick={()=>navigate("/Admin")}>
            Admin
            </button>
          <button className="portal-btn" onClick={()=>navigate("Response")}>
            Response
            </button>
        </div>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </>
  );
}

export default PortalSelection;
