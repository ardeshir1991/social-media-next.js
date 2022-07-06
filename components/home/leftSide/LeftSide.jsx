import React from "react";
import styles from "./leftSide.module.css";
import ProfileCard from "./profileCard/ProfileCard";
import Search from "./search/Search";

const LeftSide = () => {
  return (
    <div className={styles.container}>
      <Search />
      <ProfileCard />
    </div>
  );
};

export default LeftSide;
