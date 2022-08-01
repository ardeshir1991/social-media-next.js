import React from "react";
import FollowersCard from "./followersCard/FollowersCard";
import styles from "./leftSide.module.css";
import ProfileCard from "./profileCard/ProfileCard";
import Search from "./search/Search";

const LeftSide = () => {
  return (
    <div className={styles.container}>
      <Search />
      <ProfileCard profileButton={true} showPostNumber={false} />
      <FollowersCard />
    </div>
  );
};

export default LeftSide;
