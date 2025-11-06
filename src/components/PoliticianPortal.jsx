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

const handleResponseChange = (e) => {
setResponseText(e.target.value);
};

const handleSelectIssue = (id) => {
setSelectedIssueId(id);
const issue = issues.find((issue) => issue.id === id);
setResponseText(issue.response || "");
};

const handleSubmitResponse = () => {
if (selectedIssueId === null) return alert("Select an issue to respond.");
const updatedIssues = issues.map((issue) =>
issue.id === selectedIssueId ? { ...issue, response: responseText } : issue
);
setIssues(updatedIssues);
localStorage.setItem("issues", JSON.stringify(updatedIssues));
alert("Response submitted successfully!");
setSelectedIssueId(null);
setResponseText("");
};

return (
<> <header>
Voice2Gov
<div style={{ fontSize: "16px", fontWeight: "normal" }}>
Improving Interaction Between Citizens and Politicians </div> </header>

```
  <div className="container">
    <h2>Politician Portal</h2>
    {issues.length === 0 ? (
      <p style={{ fontSize: "16px", color: "#333", marginBottom: "30px" }}>
        No issues submitted yet.
      </p>
    ) : (
      <>
        <h3 style={{ marginBottom: "10px" }}>Citizen Issues</h3>
        <table style={{ width: "100%", marginBottom: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Citizen Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Issue</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.name || "Anonymous"}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.description}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button
                    onClick={() => handleSelectIssue(issue.id)}
                    style={{
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Respond
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedIssueId !== null && (
          <div style={{ marginBottom: "20px" }}>
            <textarea
              placeholder="Type your response..."
              value={responseText}
              onChange={handleResponseChange}
              style={{ width: "100%", minHeight: "80px", marginBottom: "10px", padding: "10px" }}
            />
            <button
              onClick={handleSubmitResponse}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Submit Response
            </button>
          </div>
        )}
      </>
    )}

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
</>


);
}

export default PoliticianPortal;
