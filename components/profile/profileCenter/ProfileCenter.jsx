import React from "react";
import ProfileCard from "../../home/leftSide/profileCard/ProfileCard";
import Posts from "../../home/postPart/posts/Posts";
import styles from "./profileCenter.module.css";

const ProfileCenter = () => {
  return (
    <div className={styles.profileCenter}>
      <ProfileCard profileButton={false} showPostNumber={true} />
      <Posts />
    </div>
  );
};

export default ProfileCenter;
