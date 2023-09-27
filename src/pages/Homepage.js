import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import DisplayItems from "../components/DisplayItems/DisplayItems";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles["main-container-homepage"]}>
      <div className={styles["Navbar"]}>
        <Navbar />
      </div>

      <div className={styles["homepage"]}>
        <div className={styles["sidebar"]}>
          <Sidebar />
        </div>

        <div className={styles["mainContainer"]}>
          <DisplayItems />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
