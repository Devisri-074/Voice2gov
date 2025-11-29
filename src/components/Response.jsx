import React, { useEffect, useState } from "react";

function Response() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("issues") || "[]");
    setIssues(data.filter(i => i.response && i.response.trim() !== "")); // show only responded issues
  }, []);

  return (
    <>
      <header style={{background:"#003366",color:"#fff",padding:"15px",textAlign:"center",fontSize:"26px",fontWeight:"bold"}}>
        Response Panel
        <div style={{fontSize:"15px",fontWeight:"normal"}}>Citizen Issues & Politician Responses</div>
      </header>

      <div style={{width:"70%",margin:"40px auto"}}>
        {issues.length === 0 ? (
          <div style={{
            background:"#fff",padding:"25px",borderRadius:"10px",
            textAlign:"center",color:"red",fontSize:"18px",
            boxShadow:"0 3px 10px rgba(0,0,0,0.15)"
          }}>
            ❗ No responses yet.
          </div>
        ) : (
          issues.map(issue => (
            <div key={issue.id} style={{
              background:"#fff",padding:"20px",marginBottom:"20px",
              borderRadius:"10px",boxShadow:"0 3px 10px rgba(0,0,0,0.15)"
            }}>
              <h3 style={{marginBottom:"5px",color:"#003366"}}>{issue.name}</h3>
              <p><b>Category:</b> {issue.category}</p>
              <p><b>Description:</b> {issue.description}</p>

              <div style={{
                background:"#e8f8e8",padding:"12px",borderRadius:"6px",
                marginTop:"10px",fontSize:"16px",borderLeft:"5px solid green"
              }}>
                <b>Politician Response:</b> {issue.response}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Response;
