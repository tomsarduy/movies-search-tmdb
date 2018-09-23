import React from "react";
import styles from "./app.css";
import Header from "../header/header.jsx";
import MoviesContainer from "../movies/index.jsx";

export default () => (
  <div className={styles.container}>
    <Header />
    <MoviesContainer />
  </div>
);
