import React from "react";
import styles from "./postPart.module.css";
import PostShare from "./postShare/PostShare";

const PostPart = () => {
  return (
    <div className={styles.container}>
      <PostShare />
    </div>
  );
};

export default PostPart;
