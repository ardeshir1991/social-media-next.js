import React from "react";
import styles from "./leftSide.module.css";
import Search from "./search/Search";

const LeftSide = () => {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
};

export default LeftSide;
