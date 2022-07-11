import React from "react";
import styles from "./postPart.module.css";
import Posts from "./posts/Posts";
import PostShare from "./postShare/PostShare";

const PostPart = () => {
  return (
    <div className={styles.container}>
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostPart;
