// src/components/CitizenPortal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CitizenPortal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    pincode: "",
    phone: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing issues from localStorage
    const issues = JSON.parse(localStorage.getItem("issues") || "[]");

    // Add new issue
    const newIssue = {
      id: issues.length + 1,
      category: formData.category,
      description: formData.description,
    };
    issues.push(newIssue);

    // Save back to localStorage
    localStorage.setItem("issues", JSON.stringify(issues));

    alert("Your feedback has been submitted successfully!");
    navigate("/portal");
  };

  const handleChangePortal = () => navigate("/portal");
  const handleLogout = () => navigate("/login");

  return (
    <>
      <header>
        Voice2Gov
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Improving Interaction Between Citizens and Politicians
        </div>
      </header>

      <div className="container">
        <h2>Citizen Portal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age*"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="Village/City*"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="6-digit pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Electricity</option>
            <option>Water Supply</option>
            <option>Roads</option>
            <option>Waste Management</option>
          </select>
          <textarea
            name="description"
            placeholder="Type your issue or feedback..."
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>

          <div style={{ marginTop: "15px" }}>
            <button
              type="button"
              onClick={handleChangePortal}
              style={{
                backgroundColor: "green",
                color: "white",
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              Change Portal
            </button>
            <button
              type="button"
              onClick={handleLogout}
              style={{
                backgroundColor: "crimson",
                color: "white",
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CitizenPortal;
