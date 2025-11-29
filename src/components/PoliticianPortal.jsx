import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PoliticianPortal() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues") || "[]");
    setIssues(storedIssues);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      Electricity: "#ffca2c",
      Water: "#57a0ff",
      "Water Supply": "#57a0ff",
      Roads: "#34c759",
      "Waste Management": "#ff5733"
    };
    return colors[category] || "#777";
  };

  const handleSelectIssue = (id) => {
    setSelectedIssueId(id);
    const issue = issues.find((issue) => issue.id === id);
    setResponseText(issue.response || "");
  };

  const handleSubmitResponse = () => {
    if (!selectedIssueId) return alert("Select an issue first");

    const updated = issues.map((issue) =>
      issue.id === selectedIssueId ? { ...issue, response: responseText } : issue
    );

    setIssues(updated);
    localStorage.setItem("issues", JSON.stringify(updated));
    alert("Response submitted successfully!");
    setSelectedIssueId(null);
    setResponseText("");
  };

  return (
    <>
      <header>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Improving Interaction Between Citizens and Politicians
        </div>
      </header>

      <div className="container">
        <h2>Politician Portal</h2>

        {issues.length === 0 ? (
          <p style={{ fontSize: "16px", marginTop: "20px" }}>No issues submitted yet.</p>
        ) : (
          issues.map((issue) => (
            <div key={issue.id} style={{
              background: "#fff",
              padding: "18px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ marginBottom: "5px" }}>{issue.name}</h3>

              {/* Constituency */}
              <p><strong>Constituency:</strong> {issue.constituency || "Not Provided"}</p>

              {/* Category Badge */}
              <p>
                <strong>Category: </strong>
                <span style={{
                  backgroundColor: getCategoryColor(issue.category),
                  padding: "5px 10px",
                  borderRadius: "6px",
                  color: "white"
                }}>
                  {issue.category}
                </span>
              </p>

              <p><strong>Description:</strong> {issue.description}</p>

              {/* Status Badge */}
              <p>
                <strong>Status:</strong> 
                <span style={{
                  marginLeft: "8px",
                  backgroundColor: issue.response ? "#2ecc71" : "#e74c3c",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "6px"
                }}>
                  {issue.response ? "Responded ✔" : "Pending ❗"}
                </span>
              </p>

              {/* Action Button */}
              {!issue.response && (
                <button
                  onClick={() => handleSelectIssue(issue.id)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: "10px"
                  }}
                >
                  Respond
                </button>
              )}
            </div>
          ))
        )}

        {/* RESPONSE INPUT BOX */}
        {selectedIssueId && (
          <div style={{ marginTop: "20px" }}>
            <textarea
              placeholder="Type your response..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              style={{
                width: "100%",
                minHeight: "80px",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginBottom: "10px"
              }}
            />

            <button
              onClick={handleSubmitResponse}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Submit Response
            </button>
          </div>
        )}

        <button
          className="logout-btn"
          onClick={() => navigate("/login")}
          style={{ marginTop: "30px", width: "100%" }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default PoliticianPortal;
