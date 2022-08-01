import Image from "next/image";
import React from "react";
import styles from "./profileCard.module.css";
import Link from "next/link";

const ProfileCard = ({ showPostNumber, profileButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImages}>
        <img src="/images/profile-background.jpg" alt="profile background" />
        <img src="/images/me.jpeg" alt="profile image" />
      </div>
      <div className={styles.profileInfo}>
        <span style={{ fontWeight: "bold" }}>Ardeshir Esmaili</span>
        <span style={{ color: "#4b5563" }}>Web Developer</span>
      </div>
      <div className={styles.followStatus}>
        <div className={styles.follow}>
          <span>4,532</span>
          <span>Following</span>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.follow}>
          <span>2,689</span>
          <span>Followers</span>
        </div>
        {showPostNumber && (
          <>
            <div className={styles.vl}></div>
            <div className={styles.follow}>
              <span>3</span>
              <span>Posts</span>
            </div>
          </>
        )}
      </div>
      {profileButton && (
        <Link href="/profile/1">
          <span className={styles.txt}>My Profile</span>
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
