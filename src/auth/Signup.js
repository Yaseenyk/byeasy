import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import styles from './Signup.module.css';
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      setIsFetching(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await response.user;

      

      console.log("User signed up:", user);
      if (user.accessToken) {
        setIsFetching(false);
        navigate("/signin");
      }
    } catch (error) {
      
      console.log(error.message);
      alert(error.message);
    }
  };
  const handleSignin = ()=>{
    navigate('/signin')
  }
  return (
    <div className={styles['signin-container']}>
      <h2 className={styles['header-name']}>SignUp Here</h2>
      <form className={styles['form-container']}>
        <input
          type="email"
          placeholder="Enter Your Email here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={styles['input-email']}
        ></input>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles['input-pass']}
        />
        {isFetching ? (
          <TailSpin color="#0074D9" height={20} width={20} />
        ) : (
          <button type="submit" onClick={handleSignup}
          className={styles['input-button']}
          >
            Signup
          </button>
        )}
        <div className={styles['signup-option']} onClick={handleSignin}>Signin</div>
      </form>
      
    </div>
  );
};

export default Signup;
