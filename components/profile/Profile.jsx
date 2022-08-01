import React from "react";
import Posts from "../home/postPart/posts/Posts";
import RightSide from "../home/rightSide/RightSide";
import LeftProfile from "./leftProfile/LeftProfile";
import styles from "./profile.module.css";
import ProfileCenter from "./profileCenter/ProfileCenter";

const Profile = () => {
  return (
    <div className={styles.container}>
      <LeftProfile />
      <ProfileCenter />
      <RightSide />
    </div>
  );
};

export default Profile;
