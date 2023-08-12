import React, { useState } from "react";
import { auth, provider } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

// import { onAuthStateChanged } from "firebase/auth";


const RegisterForm = ({isNotRegistered}) => {
  const initialState = { email: "", password: "", confirmPwd: "" };
  const [user, setUser] = useState(initialState);

 const navigate =useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const signupWithGoogle=async (e)=>{
         e.preventDefault();
    try {
        await signInWithPopup(auth,provider)
        navigate("/Home")
        
    } catch (err) {
        console.error(err);
    }
    
  }
  const signUp = async (e) => {
    e.preventDefault();
    try {
      user.confirmPwd === user.password && await createUserWithEmailAndPassword(auth, user.email, user.password);
        navigate("/Home");
    } catch (err) {
      console.log(err);
    }
    return setUser(initialState);
  };

  const signIn=async (e)=>{
    e.preventDefault();
      try {
       await signInWithEmailAndPassword(auth,user.email,user.password)
       .then((res)=>(console.log(res)))
       navigate("/Home")
    
   } catch (error) {
    console.log("error")
   }
  }

//   const logOut=async (e)=>{
// try {
//     signOut(auth)
// } catch (error) {
//     console.log(error);
// }
//   }

  return (
    <div className="form-container">
      <form className="form-card">
      <button onClick={signupWithGoogle} className="google-btn">
          <img src="./images/googleIcon.svg" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        <p style={{ textAlign: "center",margin:'0' }}>or</p>
        <Link to="/Home"><span style={{display:"block",margin:"0",textAlign:'center',fontSize:"14px"}}>continue without signup</span></Link>
        <h1>Sign {isNotRegistered?"up":"in"}</h1>
       
        <label>Email</label>
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email..."
          value={user.email}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password..."
          onChange={handleInputChange}
          value={user.password}
        />
       
       {isNotRegistered && (
          <>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPwd"
              placeholder="Confirm Password..."
              onChange={handleInputChange}
              value={user.confirmPwd}
            />
          </>
        )}
        
        <button className="form-btn" onClick={isNotRegistered?signUp:signIn}>
          {isNotRegistered?"Sign up":"Login"}
        </button>
        {/* <button className="form-btn" onClick={logOut}>
          Log Out
        </button> */}
     
      <div style={{fontSize:"14px",textAlign:"center",marginTop:"6px"}}>{isNotRegistered&& "Already a user? "}<Link to={isNotRegistered?"/Login":"/RegisterForm"}>{isNotRegistered?"Login":"Register User"}</Link></div>
      </form>

    </div>
  );
};

export default RegisterForm;
