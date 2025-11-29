import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setErrorMsg("❌ Invalid Email or Password");
      return;
    }

    // Store logged user
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setErrorMsg("");

    // 🔥 Final Correct Role Routing
    if (user.role === "Citizen") navigate("/citizen");
    if (user.role === "Politician") navigate("/politician");   // FIXED ✔ Politician goes to his portal
    if (user.role === "Response") navigate("/response");       // Response Portal
    if (user.role === "Admin") navigate("/admin");             // Admin Portal
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
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {errorMsg && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>
        )}

        <p>
          New user?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", color: "#003366", fontWeight: "bold" }}
          >
            Sign up here
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
