import React from "react";
import styles from "./index.css";
import MoviesList from "./movies-list.jsx";
import * as api from "../api";
import debounce from "lodash/debounce";
import SearchInput from "./search-input.jsx";
import OrderByInput from "./order-by-input.jsx";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      orderBy: 'title'
    };
    this.onSearch = this.onSearch.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    // debounce the fetching
    this.fetchMovies = debounce(this.fetchMovies, 500);
  }

  onSearch(evt) {
    if(!evt.target.value) {
      return this.setState({
        movies: [],
      })
    }
    this.fetchMovies(evt.target.value)
  }

  componentDidMount() {
    api.fetchMoviesGenres().then(data => {
      this.setState({
        genres: data.genres.reduce(
          (acc, gen) => ({
            ...acc,
            [gen.id]: gen.name
          }),
          {}
        )
      });
    });
  }

  onOrderChange(evt) {
    this.setState({
      orderBy: evt.target.value
    })
  }

  fetchMovies(searchQuery) {
    return api
      .fetchMoviesByQuery(searchQuery)
      .then(movies => {
        this.setState({
          movies: movies.results.map(({ ...params, genre_ids }) => ({
            ...params,
            genres: genre_ids.map(genreId => this.state.genres[genreId])
          }))
        });
      })
  }

  render() {
    const hasResults = this.state.movies;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <SearchInput onChange={this.onSearch} />
          <OrderByInput onChange={this.onOrderChange} />
        </div>
        {hasResults && <MoviesList movies={this.state.movies} orderBy={this.state.orderBy} />}
      </React.Fragment>
    );
  }
}

export default MoviesContainer;
