import React from "react";

export default ({ movies }) =>
  movies.map(movie => <li key={movie.id}>{movie.title}</li>);
