// Signin.js
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import styles from "./Signin.module.css"; // Import the CSS module

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      setIsFetching(true); // Show the loader

      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = await response.user;
      sessionStorage.setItem("accessToken", user.accessToken);
      // You can add logic here for successful sign-in

      navigate("/"); // Redirect to the dashboard page after sign-in
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } finally {
      setIsFetching(false); // Hide the loader
    }
  };
  const handleSignup = ()=>{
    navigate('/signup')
  }
  return (
    <div className={styles["signin-container"]}>
      <h2 className={styles["header-name"]}>Sign In Here</h2>
      <form className={styles["form-container"]}>
        <input
          type="email"
          placeholder="Enter Your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles["input-email"]}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles["input-pass"]}
        />
        <button
            type="submit"
            onClick={handleSignin}
            className={styles["input-button"]}
          >
        {isFetching ? (
          <TailSpin color="#0074D9" height={20} width={20} />
        ) : (
          <>Sign In</>
            
            )}
          </button>
        
        <div className={styles['signup-option']} onClick={handleSignup}>SignUp Here!</div>
      </form>
      
    </div>
  );
};

export default Signin;
