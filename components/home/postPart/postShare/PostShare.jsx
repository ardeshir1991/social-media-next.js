import React, { useState, useRef } from "react";
import styles from "./postShare.module.css";
import {
  FiMapPin,
  FiPlayCircle,
  FiCalendar,
  FiImage,
  FiXCircle,
} from "react-icons/fi";
import Button from "../../../button/Button";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const changeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.writtingStatus}>
        <img src="/images/me.jpeg" alt="profile image" />
        <input type="text" placeholder="what is in your head?" />
      </div>
      <div className={styles.postOptions}>
        <div className={styles.option} style={{ color: "#fca61f" }}>
          <FiMapPin />
          <span>Location</span>
        </div>
        <div className={styles.option} style={{ color: "#4A4EB7" }}>
          <FiPlayCircle />
          <span>Video</span>
        </div>
        <div className={styles.option} style={{ color: "#EF5757" }}>
          <FiCalendar />
          <span>Schedule</span>
        </div>
        <div
          className={styles.option}
          style={{ color: "#E1AE4A" }}
          onClick={() => imageRef.current.click()}
        >
          <FiImage />
          <span>Photo</span>
        </div>
        <Button>Share</Button>
        <input
          style={{ display: "none" }}
          type="file"
          name="postImage"
          id=""
          ref={imageRef}
          onChange={changeHandler}
        />
      </div>
      {image && (
        <div className={styles.previewImage}>
          <FiXCircle onClick={() => setImage(null)} />
          <img src={image} alt="post image" />
        </div>
      )}
    </div>
  );
};

export default PostShare;
