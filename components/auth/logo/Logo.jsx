import React from "react";
import styles from "./logo.module.css";
import { FaSketch } from "react-icons/fa";

const Logo = () => {
  return (
    <div className={styles.container}>
      <FaSketch />
      <div className={styles.webname}>
        <h1>A Media</h1>
        <h6>Explore the ideas throughout the world</h6>
      </div>
    </div>
  );
};

export default Logo;
