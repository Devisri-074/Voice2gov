import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CitizenPortal() {

  const navigate = useNavigate();
  const [newResponses,setNewResponses]=useState(0);
  const [showPopup,setShowPopup]=useState(false);

  const bell = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

  const [formData,setFormData]=useState({
    name:"",age:"",gender:"",location:"",constituency:"",
    pincode:"",phone:"",category:"",description:""
  });

  useEffect(()=>{
    const issues = JSON.parse(localStorage.getItem("issues")||"[]");
    const unread = issues.filter(i=>i.response && i.notified!==true).length;

    if(unread>0){
      setNewResponses(unread);
      setShowPopup(true);
      bell.play();

      setTimeout(()=>navigate("/response-chat"),3000);
    }
  },[]);

  const submit = e =>{
    e.preventDefault();
    const issues = JSON.parse(localStorage.getItem("issues")||"[]");

    issues.push({id:issues.length+1,...formData,response:"",notified:false});
    localStorage.setItem("issues",JSON.stringify(issues));

    alert("✔ Issue Submitted");
    navigate("/citizen");
  };

  return(
    <>
    <header>Voice2Gov <div>Citizen Complaint Portal</div></header>

    <div className="container">

      {showPopup &&
        <div style={{background:"#003366",color:"white",padding:"10px",borderRadius:"6px"}}>
           🔔 New Response — Opening Soon...
        </div>
      }

      <h2>Submit Issue {newResponses>0 && <span style={{background:"red",color:"white",padding:"4px"}}>{newResponses}</span>}</h2>

      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={e=>setFormData({...formData,name:e.target.value})} required />
        <input name="age" placeholder="Age" onChange={e=>setFormData({...formData,age:e.target.value})} required />
        <input name="location" placeholder="City/Village" onChange={e=>setFormData({...formData,location:e.target.value})} required />
        <input name="constituency" placeholder="Constituency" onChange={e=>setFormData({...formData,constituency:e.target.value})} required />
        <input name="phone" placeholder="Phone" onChange={e=>setFormData({...formData,phone:e.target.value})}/>
        
        <select name="category" onChange={e=>setFormData({...formData,category:e.target.value})} required>
          <option value="">Select Category</option>
          <option>Electricity</option><option>Roads</option><option>Water Supply</option>
        </select>

        <textarea name="description" placeholder="Describe Issue" required onChange={e=>setFormData({...formData,description:e.target.value})}/>

        <button type="submit">Submit</button>
        <button onClick={()=>{localStorage.removeItem("loggedInUser");navigate("/login")}} 
        className="logout-btn">Logout</button>
      </form>
    </div>
    </>
  );
}

export default CitizenPortal;
