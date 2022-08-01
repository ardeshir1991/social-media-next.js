import React from "react";
import FollowersCard from "../../home/leftSide/followersCard/FollowersCard";
import Search from "../../home/leftSide/search/Search";
import Infocard from "../../infocard/Infocard";
import styles from "./leftProfile.module.css";

const LeftProfile = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Infocard />
      <FollowersCard />
    </div>
  );
};

export default LeftProfile;
