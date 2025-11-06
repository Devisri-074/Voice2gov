// src/components/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Add new user
    const newUser = {
      id: users.length + 1,
      name: fullName,
      email,
      password,
      role: "Citizen", // default role
    };
    users.push(newUser);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login"); // redirect after signup
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
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span
            className="toggle-link"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#003366" }}
          >
            Login here
          </span>
        </p>
      </div>
    </>
  );
}

export default SignupPage;
