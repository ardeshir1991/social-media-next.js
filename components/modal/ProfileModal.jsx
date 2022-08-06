import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../button/Button";
import styles from "./profileModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
};

const ProfileModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modalContainer}>
        <h3>YOUR INFO</h3>
        <form action="">
          <div className={styles.personalInfo}>
            <input type="text" name="fname" id="" placeholder="FirstName" />
            <input type="text" name="lname" id="" placeholder="LastName" />
            <input type="text" name="workAt" id="" placeholder="Work At" />
            <input type="text" name="state" id="" placeholder="State" />
            <input type="text" name="country" id="" placeholder="Country" />
            <input
              type="text"
              name="relationshipStatus"
              id=""
              placeholder="Relationship Status"
            />
          </div>
          <div className={styles.images}>
            <div className={styles.image}>
              <span>Profile Image</span>
              <input type="file" name="profileImage" id="" />
            </div>
            <div className={styles.image}>
              <span>Cover Image</span>
              <input type="file" name="coverImage" id="" />
            </div>
          </div>
          <Button>Update</Button>
        </form>
      </div>
      <span onClick={closeModal} className={styles.closeModal}>
        &times;
      </span>
    </Modal>
  );
};

export default ProfileModal;
