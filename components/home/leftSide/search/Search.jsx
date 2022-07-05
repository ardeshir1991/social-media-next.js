import React from "react";
import { FaSearchengin, FaSketch } from "react-icons/fa";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <FaSketch className={styles.logo} />
      <div className={styles.search}>
        <input type="text" placeholder="search ..." />
        <div className={styles.icon}>
          <FaSearchengin />
        </div>
      </div>
    </div>
  );
};

export default Search;
