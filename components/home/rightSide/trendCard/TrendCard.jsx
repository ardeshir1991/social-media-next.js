import React from "react";
import styles from "./trendCard.module.css";
import { trendData } from "../../../../assets/trendData";
import Button from "../../../button/Button";

const TrendCard = () => {
  return (
    <div className={styles.container}>
      <h3>Your trends are ...</h3>
      <ul className={styles.trends}>
        {trendData.map((trend, i) => (
          <li key={i} className={styles.trend}>
            <span>#{trend.name}</span>
            <span>{trend.shares}</span>
          </li>
        ))}
      </ul>
      <Button>Share</Button>
    </div>
  );
};

export default TrendCard;
