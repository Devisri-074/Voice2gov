import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if(users.some(u=>u.email===email)) return setMsg("⚠ Email Already Registered");

    users.push({ id:users.length+1, name:fullName, email,password, role });
    localStorage.setItem("users",JSON.stringify(users));

    setMsg("✔ Registered Successfully");
    setTimeout(()=>navigate("/login"),900);
  };

  return (
    <>
      <header>Voice2Gov <div>Improving Interaction Between Citizens & Govt</div></header>

      <div className="container">
        <h2>Sign Up</h2>

        <form onSubmit={handleSignup}>
          <input placeholder="Full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <select value={role} onChange={(e)=>setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Citizen">Citizen</option>
            <option value="Politician">Politician</option>
            <option value="Admin">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {msg && <p style={{color:"green"}}>{msg}</p>}

      </div>
    </>
  );
}

export default SignupPage;
