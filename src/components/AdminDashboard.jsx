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

return ( <div> <header>
Voice2Gov
<div style={{ fontSize: "16px", fontWeight: "normal" }}>
Improving Interaction Between Citizens and Politicians </div> </header>

```
  <div className="container admin-portal">
    <h2>Admin Dashboard</h2>

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

    <h3>Submitted Issues</h3>
    <table style={{ width: "100%", marginBottom: "30px", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Citizen Name</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.id}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.name || "Anonymous"}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.category}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{issue.description}</td>
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

export default AdminDashboard;
