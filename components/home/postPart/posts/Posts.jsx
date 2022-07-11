import React from "react";
import styles from "./posts.module.css";
import { postsData } from "../../../../assets/postsData";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

const Posts = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.posts}>
        {postsData.map((post) => (
          <li className={styles.post} key={post.id}>
            <img src={post.img} alt={post.name} />
            <div className={styles.reactions}>
              {post.liked ? (
                <FaHeart style={{ color: "#ef4444" }} />
              ) : (
                <FiHeart />
              )}
              <FiMessageCircle />
              <FiSend />
            </div>
            <span>{post.likes} likes</span>
            <div className={styles.details}>
              <span>{post.name}</span>
              <span>{post.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
