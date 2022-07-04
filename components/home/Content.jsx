import React from "react";
import LeftSide from "./leftSide/LeftSide";
import PostPart from "./postPart/PostPart";
import RightSide from "./rightSide/RightSide";
import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <LeftSide />
      <PostPart />
      <RightSide />
    </div>
  );
};

export default Content;
