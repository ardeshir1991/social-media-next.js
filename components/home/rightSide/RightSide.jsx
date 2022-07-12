import React from "react";
import {
  FaCog,
  FaRegBell,
  FaRegCommentDots,
  FaRegEnvelope,
} from "react-icons/fa";
import styles from "./rightSide.module.css";
import TrendCard from "./trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notification}>
        <div className={styles.item}>
          <FaCog />
          <span>2</span>
        </div>
        <div className={styles.item}>
          <FaRegEnvelope />
          <span>2</span>
        </div>
        <div className={styles.item}>
          <FaRegCommentDots />
          <span>2</span>
        </div>
        <div className={styles.item}>
          <FaRegBell />
          <span>2</span>
        </div>
      </div>
      <TrendCard />
    </div>
  );
};

export default RightSide;
