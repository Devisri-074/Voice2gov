import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PoliticianPortal(){

  const nav=useNavigate();
  const [issues,setIssues]=useState([]);

  useEffect(()=>{
    setIssues(JSON.parse(localStorage.getItem("issues")||"[]"));
  },[]);

  const reply=id=>{
    const text=prompt("Enter reply:");
    if(!text) return;

    const updated = issues.map(i=>i.id===id?{...i,response:text,notified:false}:i);
    setIssues(updated);
    localStorage.setItem("issues",JSON.stringify(updated));
    alert("Response Sent ✔");
  };

  return(
    <div className="container">
      <h2>Issues From Citizens</h2>

      {issues.map(i=>(
        <div key={i.id} style={{background:"#fff",padding:"12px",marginBottom:"10px",borderRadius:"6px"}}>
          <p><b>Name:</b> {i.name}</p>
          <p><b>Category:</b> {i.category}</p>
          <p><b>Issue:</b> {i.description}</p>

          {!i.response ?
            <button onClick={()=>reply(i.id)}>Send Response</button> :
            <span style={{color:"green"}}>Responded ✔</span>}
        </div>
      ))}

      <button onClick={()=>nav("/login")} className="logout-btn">Logout</button>
    </div>
  );
}
export default PoliticianPortal;
