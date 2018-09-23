import React from "react";
import styles from "./order-by-input.css";

export default ({ onChange }) => (
  <div className={styles.sortByContainer}>
    <span>
      <b>Sort by: </b>
    </span>
    <select
      className={styles.sortBySelect}
      name="sort-by"
      id="sort-by"
      onChange={onChange}
      defaultValue="title"
    >
      <option value="title">Title</option>
      <option value="popularity">Popularity</option>
      <option value="release_date">Release Date</option>
    </select>
  </div>
);
