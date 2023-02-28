import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export const Login = () => {
    const navigate = useNavigate();
 const [ldata,setLdata]=useState()


  const handlechange = (e) => {
    const {id , value}=e.target
    setLdata({...ldata,[id]:value})
  };

 const handleLogin=(e)=>{
    var Sdata=JSON.parse(  localStorage.getItem("Verve_Data"))
    if(ldata.username==Sdata.username &&ldata.password==Sdata.password){
        alert("Login Successfull .")
        navigate("/home")
    }
    else{
        alert("Please enter valid credentials !")
    }
 }
    
  return (
    <div className="login">
     
      <div className="form_container1">
       
      <div className="img-div">
          <img src="https://media.glassdoor.com/sqll/538789/verve-system-squarelogo-1433661500443.png" alt="" />
          </div>
          <h2>Login</h2>
        <form >
          <label className="label" id="lab">User Name</label>
          <br />
          <br />
          <input type="text" placeholder="User Name" id="username" onChange={handlechange} />
          <br />
          <br />

          <label id="lab">Password</label>
          <br />
          <br />
          <input type="password" placeholder="Password" id="password" onChange={handlechange} />
          <br />
          <br />
          <h4>Don't Have an account?<Link to="/">Register Here</Link></h4>
          <br />
          <input id="subbtn" onClick={handleLogin} type="submit" />
        </form>
      </div>
    </div>
  );
};
