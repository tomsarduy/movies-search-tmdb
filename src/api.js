const apiKey = "88c8850e8777f4729b2fb5965887fe13";
const baseURL = "https://api.themoviedb.org/3";

export const fetchMoviesByQuery = seachQuery => {
  const params = new URLSearchParams();
  params.append("api_key", apiKey);
  params.append("language", "en-US");
  params.append("query", seachQuery);

  return fetch(`${baseURL}/search/movie?${params}`, {
    method: "GET",
    mode: "cors"
  }).then(res => res.json());
};

export const fetchGenres = () => {
  const params = new URLSearchParams();
  params.append("api_key", apiKey);
  params.append("language", "en-US");

  return fetch(`${baseURL}/genre/movie/list?${params}`, {
    method: "GET",
    mode: "cors"
  }).then(res => res.json());
};
