import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PoliticianResponse() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Sample data for testing
    const storedIssues = JSON.parse(localStorage.getItem("issues") || "[]");
    if (storedIssues.length === 0) {
      const sampleIssues = [
        {
          id: 1,
          name: "John Doe",
          category: "Electricity",
          description: "Power outage in my area",
          response: "Technician will check tomorrow",
        },
        {
          id: 2,
          name: "Jane Smith",
          category: "Water Supply",
          description: "Water shortage in village",
          response: "",
        },
      ];
      localStorage.setItem("issues", JSON.stringify(sampleIssues));
      setIssues(sampleIssues);
    } else {
      setIssues(storedIssues);
    }
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: "#003366", color: "white", padding: "15px 0", textAlign: "center" }}>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Improving Interaction Between Citizens and Politicians
        </div>
      </header>

      <div className="container">
        <h2>Politician Response</h2>

        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <button
            style={{ flex: 1, backgroundColor: "#007bff", color: "white", padding: "12px", border: "none", borderRadius: "6px" }}
          >
            Citizen Issues
          </button>
          <button
            style={{ flex: 1, backgroundColor: "#00509e", color: "white", padding: "12px", border: "none", borderRadius: "6px" }}
          >
            Politician Responses
          </button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Citizen Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Response</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.name || "Anonymous"}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.category}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.description}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.response || "No response yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="change-portal-btn"
          onClick={() => navigate("/portal")}
          style={{ marginBottom: "12px" }}
        >
          Change Portal
        </button>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default PoliticianResponse;
