export const apiKey = "88c8850e8777f4729b2fb5965887fe13";
const baseURL = "https://api.themoviedb.org/3";

const checkStatus = response => {
  if (response.ok) {
    return response;
  }
  throw new Error("Error response was not ok");
};

const handleError = error => {
  if (error) {
    throw new Error(error.message);
  }
  // e.g. cors / offline etc.
  throw new Error("network error");
};

export const fetchMoviesByQuery = seachQuery => {
  const params = new URLSearchParams();
  params.append("api_key", apiKey);
  params.append("language", "en-US");
  params.append("query", seachQuery);

  return fetch(`${baseURL}/search/movie?${params}`, {
    method: "GET",
    mode: "cors"
  })
    .then(checkStatus)
    .then(res => res.json(), handleError);
};

export const fetchMoviesGenres = () => {
  const params = new URLSearchParams();
  params.append("api_key", apiKey);
  params.append("language", "en-US");

  return fetch(`${baseURL}/genre/movie/list?${params}`, {
    method: "GET",
    mode: "cors"
  })
    .then(checkStatus)
    .then(res => res.json(), handleError);
};
