import React from "react";
import styles from "./infoCard.module.css";
import { FaPen } from "react-icons/fa";
import Button from "../button/Button";

const Infocard = () => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHead}>
        <h4>Your Info</h4>
        <FaPen />
      </div>
      <ul>
        <li>
          <span>Status </span>
          <span>In Relationship</span>
        </li>
        <li>
          <span>Lives In </span>
          <span>Isfahan</span>
        </li>
        <li>
          <span>Works As </span>
          <span>FreeLnacer</span>
        </li>
      </ul>
      <Button>Logout</Button>
    </div>
  );
};

export default Infocard;
