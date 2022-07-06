import React from "react";
import styles from "./followersCard.module.css";
import { data } from "../../../../assets/data";
import Button from "../../../button/Button";

const FollowersCard = () => {
  return (
    <div className={styles.container}>
      <h3>List Of Followers</h3>
      <ul>
        {data.map((follower) => (
          <li key={follower.id}>
            <img src={follower.profileImage} alt={follower.name} />
            <div>
              <span>{follower.name}</span>
              <span>{follower.email}</span>
            </div>
            <Button>Follow</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersCard;
