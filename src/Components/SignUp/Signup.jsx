
import "./Signup.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({username:"",password:""})

    const handleChange=(e)=>{
        const {id , value}=e.target
        setData({...data,[id]:value})
    }

    const handleClick=(e)=>{
        if(data.username!="" && data.password!=""){
            localStorage.setItem("Verve_Data",JSON.stringify(data))
            alert("You have registered successfully !")
            navigate("/login")
        }
        else{
            alert("Plese enter valid credentials !")
        }   
    }
  return (
    <div>
     
      <div className="signup">
      
        <div className="form_container2">
          <div className="img-div">
          <img src="https://media.glassdoor.com/sqll/538789/verve-system-squarelogo-1433661500443.png" alt="" />
          </div>
        <h2>SignUp</h2>
          <form id="signup_form">
            <label id="lab">User Name</label>
            <br />
            <input
              placeholder="User Name"
              className="signinp"
              type="text"
              id="username"
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label id="lab">Password</label>
            <br />
            <input
              placeholder="Password"
              className="signinp"
              type="password"
              id="password"
              onChange={handleChange}
            />
            <br />
            <br />
            <h4>Already have an account?<Link to="/login">Login Here</Link></h4>
            <br />
            <input id="subbtn1" onClick={handleClick} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
