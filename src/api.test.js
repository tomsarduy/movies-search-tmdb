global.fetch = require("jest-fetch-mock");
import { fetchMoviesByQuery, fetchMoviesGenres } from "./api.js";
const movieTitle = "The Lord of the rings";
describe("fetchMoviesByQuery", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should pass the right parameters in the request", () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    fetchMoviesByQuery("exampleQuery");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toContain("api_key");
    expect(fetch.mock.calls[0][0]).toContain("query=exampleQuery");
    expect(fetch.mock.calls[0][0]).toContain("language=en-US");
  });

  it("should return a valid json when response is successful ", () => {
    fetch.mockResponseOnce(
      JSON.stringify({ results: [{ id: 1, title: movieTitle }] })
    );
    fetchMoviesByQuery("query").then(data => {
      expect(typeof data).toEqual("object");
    });
  });

  it("should return the response error message", () => {
    fetch.mockReject(new Error("fake error message"));

    fetchMoviesByQuery("query").catch(data => {
      expect(data).toEqual(new Error("fake error message"));
    });
  });

  it("returns an error message when request fail", () => {
    fetch.mockResponseOnce(JSON.stringify({}), { ok: false, status: 400 });

    fetchMoviesByQuery("query").catch(data => {
      expect(data).toEqual(new Error("Error response was not ok"));
    });
  });
});

describe("fetchMoviesGenres", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should pass the right parameters in the request", () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    fetchMoviesGenres();
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toContain("api_key");
    expect(fetch.mock.calls[0][0]).toContain("language=en-US");
  });

  it("should return a valid json when response is successful ", () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 1, name: "horror" }]));
    fetchMoviesGenres().then(data => {
      expect(typeof data).toEqual("object");
    });
  });

  it("should return the response error message", () => {
    fetch.mockReject(new Error("fake error message"));

    fetchMoviesGenres("query").catch(data => {
      expect(data).toEqual(new Error("fake error message"));
    });
  });

  it("returns an error message when request fail", () => {
    fetch.mockResponseOnce(JSON.stringify({}), { ok: false, status: 400 });

    fetchMoviesGenres("query").catch(data => {
      expect(data).toEqual(new Error("Error response was not ok"));
    });
  });
});
