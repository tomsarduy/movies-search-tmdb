import React from "react";
import styles from "./app.css";
import Header from "../header/header.jsx";
import SearchMoviesContainer from "../search-movies/search-movies-container.jsx";

export default () => (
  <div className={styles.container}>
    <Header />
    <SearchMoviesContainer />
  </div>
);
