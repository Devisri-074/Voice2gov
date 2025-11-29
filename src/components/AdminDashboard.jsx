import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const storedIssues = JSON.parse(localStorage.getItem("issues") || "[]");
    setUsers(storedUsers);
    setIssues(storedIssues);
  }, []);

  return (
    <div>
      <header>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Monitoring Citizens & Politician Responses
        </div>
      </header>

      <div className="container admin-portal">
        <h2>Admin Dashboard</h2>

        {/* USERS LIST */}
        <h3>Registered Users</h3>
        <table style={{ width: "100%", marginBottom: "30px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ISSUE + RESPONSE CHAT VIEWER */}
        <h3>Citizen Issues + Politician Responses</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Issue ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Citizen</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Response (Chat View)</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.category}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.description}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px", color: issue.response ? "green" : "red" }}>
                  {issue.response ? issue.response : "⏳ No reply yet"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
