import React from "react";
import styles from "./Navbar.module.css";
import Home from "../../assets/Home.png";
import Signin from "../../assets/Signin.png";
import ByEasy from "../../assets/ByEasy.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleSigninClick = () => {
    navigate("/signin");
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles["logo"]}>
        <img src={ByEasy} alt="logo" className={styles["logo-png"]} />
      </div>
      <div className={styles["redirection-links"]}>
        <div className={styles["HomeLink"]} onClick={handleHomeClick}>
          <img src={Home} className={styles["HomepageLogo"]} alt="home" />
          Home
        </div>
        <div className={styles["SigninLink"]} onClick={handleSigninClick}>
          <img src={Signin} className={styles["SigninLogo"]} alt="signin" />
          Signin
        </div>
      </div>
    </div>
  );
};

export default Navbar;
