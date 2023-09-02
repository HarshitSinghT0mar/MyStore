import React from "react";
import { auth, provider } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const RegisterForm = ({ isNotRegistered }) => {
  const navigate = useNavigate();
  const { user, setUser, initialState } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const signupWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithPopup(provider);
      navigate("/");
    } catch (err) {
      console.error("error has occurred: ",err);
    }
  };
  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (user?.confirmPwd === user?.password) {
        await createUserWithEmailAndPassword(auth, user?.email, user?.password);
        navigate("/");
        toast.success("signed up successfully", {
          progressStyle: {
            backgroundColor: "white",
          },
        });
      } else {
        toast.error("passwords did not match..")}
    } catch (err) {
      console.log(err);
    }
    return setUser(initialState);
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);

      navigate("/");
      toast.success("logged in successfully", {
        progressStyle: {
          backgroundColor: "white",
        },
      });
    } catch (error) {
      toast.error("incorrect username or password")
      console.log(error);
    }
    setUser(initialState);
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={isNotRegistered ? signUp : signIn}>
        <button onClick={signupWithGoogle} className="google-btn">
          <img src="./images/googleIcon.svg" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        <p style={{ textAlign: "center", margin: "0" }}>or</p>
        <Link to="/">
          <span
            style={{
              display: "block",
              margin: "0",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            continue without signup
          </span>
        </Link>
        <h1>Sign {isNotRegistered ? "up" : "in"}</h1>

        <label>Email</label>
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email..."
          value={user.email}
          required
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password..."
          onChange={handleInputChange}
          value={user.password}
          required
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
              required
            />
          </>
        )}

        <button className="form-btn">
          {isNotRegistered ? "Sign up" : "Login"}
        </button>

        <div
          style={{ fontSize: "14px", textAlign: "center", marginTop: "6px" }}
        >
          {isNotRegistered ? "Already a user?" : "Not registered? "}
          <Link to={isNotRegistered ? "/Login" : "/RegisterForm"}>
            {isNotRegistered ? "Login" : "register here"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
