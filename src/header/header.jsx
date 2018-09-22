import React from "react";
import TheMovieDBLogo from "./themoviedb.svg";
import DAZNLogo from "./dazn.svg";
import styles from "./header.css";

export default () => (
  <header className={styles.header}>
    <div className={styles.logos}>
      <DAZNLogo height="100" fill="black" className={styles.daznLogo} />
      <TheMovieDBLogo height="100" className={styles.tmdbLogo} />
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <a _target="blank" href="hhttps://www.themoviedb.org/about">
            About TMDb
          </a>
        </li>
        <li>
          <a
            _target="blank"
            href="https://www.themoviedb.org/documentation/api/terms-of-use"
          >
            API Terms of Use
          </a>
        </li>
        <li>
          <a _target="blank" href="https://developers.themoviedb.org/3">
            API Docs
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
