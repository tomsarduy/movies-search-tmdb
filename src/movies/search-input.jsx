import React from "react";
import styles from "./search-input.css";

export default ({ onChange }) => (
  <input
    className={styles.inputSearch}
    type="search"
    id="movie-search"
    name="q"
    placeholder="Search movies..."
    onChange={onChange}
  />
);
