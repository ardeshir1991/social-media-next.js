import React from "react";
import styles from "./blur.module.css";

const Blur = () => {
  return (
    <>
      <div className={styles.blur} style={{ top: "-18%", right: "0" }}></div>
      <div className={styles.blur} style={{ top: "36%", left: "-8rem" }}></div>
    </>
  );
};

export default Blur;
