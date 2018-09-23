import React from "react";
import styles from "./movies-list.css";

export default ({ movies, orderBy }) => (
  <ul className={styles.list}>
    {movies
      .sort((movie1, movie2) => (movie1[orderBy] >= movie2[orderBy] ? 1 : -1))
      .map(movie => (
        <li className={styles.listItem} key={movie.id}>
          <span>{movie.title}</span>
          <br />
          <span>
            {movie.genres.map(genre => (
              <span key={genre} className={styles.genreTag}>
                {genre}
              </span>
            ))}
          </span>
          {movie.release_date ? (
            <span className={styles.releaseDate}>{movie.release_date}</span>
          ) : null}
          {movie.popularity ? movie.popularity : null}
        </li>
      ))}
  </ul>
);
