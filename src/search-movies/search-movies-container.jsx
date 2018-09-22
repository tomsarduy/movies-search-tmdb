import React from "react";
import styles from "./search-movies.css";
import MoviesList from "./movies-list.jsx";
class SearchMoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: "The Lord of the Rings", id: 1 }]
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onComponentDidMount() {
    // Fetch popular movies
  }

  onInputChange(evt) {
    // Fetch movies matching the search
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <input
            className={styles.inputSearch}
            type="search"
            id="site-search"
            name="q"
            placeholder="Search movies..."
            onChange={this.onInputChange}
          />
        </div>
        <MoviesList movies={this.state.movies} />
      </React.Fragment>
    );
  }
}

export default SearchMoviesContainer;
