import React, { useState } from "react";
import styles from "./infoCard.module.css";
import { FaPen } from "react-icons/fa";
import Button from "../button/Button";
import Modal from "react-modal";
import ProfileModal from "../modal/ProfileModal";

Modal.setAppElement("#infoHead");

const Infocard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHead}>
        <ProfileModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <h4>Your Info</h4>
        <FaPen id="infoHead" onClick={openModal} />
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
