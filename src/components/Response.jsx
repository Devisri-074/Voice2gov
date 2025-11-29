import React, { useEffect, useState } from "react";

function Response() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues") || "[]");
    // show only issues which politician responded to
    const filtered = storedIssues.filter(iss => iss.response && iss.response.trim() !== "");
    setIssues(filtered);
  }, []);

  return (
    <div>
      <header style={{ background:"#003366",color:"white",padding:"15px",textAlign:"center" }}>
        Response Panel
        <div style={{ fontSize:"16px",fontWeight:"normal" }}>
          Citizen Issues & Politician Responses
        </div>
      </header>

      <div className="container">
        <h2>Responses Received</h2>

        {issues.length === 0 ? (
          <p>❗ No responses yet.</p>
        ) : (
          issues.map((item, i) => (
            <div key={i} style={{
              background:"#fff",padding:"15px",borderRadius:"8px",
              marginBottom:"10px",boxShadow:"0 2px 6px rgba(0,0,0,0.2)"
            }}>
              <p><b>Name:</b> {item.name}</p>
              <p><b>Phone:</b> {item.phone}</p>
              <p><b>Category:</b> {item.category}</p>
              <p><b>Description:</b> {item.description}</p>

              <p><b style={{color:"green"}}>Response:</b> {item.response}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Response;
