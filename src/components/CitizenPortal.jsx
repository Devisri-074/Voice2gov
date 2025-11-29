import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CitizenPortal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    constituency: "",   // <-- NEW FIELD ADDED
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

    const issues = JSON.parse(localStorage.getItem("issues") || "[]");

    const newIssue = {
      id: issues.length + 1,
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      location: formData.location,
      constituency: formData.constituency, // <-- SAVING
      pincode: formData.pincode,
      phone: formData.phone,
      category: formData.category,
      description: formData.description,
    };

    issues.push(newIssue);
    localStorage.setItem("issues", JSON.stringify(issues));

    alert("Your feedback has been submitted successfully!");
    navigate("/citizen"); // stay in portal

    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      location: "",
      constituency: "",
      pincode: "",
      phone: "",
      category: "",
      description: "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
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
        <h2>Citizen Portal</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} required />
          <input name="age" type="number" placeholder="Age*" value={formData.age} onChange={handleChange} required />

          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input name="location" placeholder="Village/City*" value={formData.location} onChange={handleChange} required />

          {/* ---------------- NEW FIELD ---------------- */}
          <input
            name="constituency"
            placeholder="Constituency*"
            value={formData.constituency}
            onChange={handleChange}
            required
          />

          <input name="pincode" placeholder="6-digit pincode" value={formData.pincode} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />

          <select name="category" value={formData.category} onChange={handleChange} required>
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

          <button
            type="button"
            onClick={handleLogout}
            style={{
              backgroundColor: "red",
              color: "white",
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </form>
      </div>
    </>
  );
}

export default CitizenPortal;
