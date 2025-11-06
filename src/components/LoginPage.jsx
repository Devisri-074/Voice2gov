import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/portal"); // after login
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
          <input type="text" placeholder="Enter Username" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          New user?{" "}
          <span
            className="toggle-link"
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", color: "#003366" }}
          >
            Sign up here
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
