import React from "react";
import MoviesList from "./movies-list";

const movies = [
  {
    id: 1,
    title: "The Lord of the rings",
    release_date: "2001-12-10",
    genres: ["Adventure", "Fantasy", "Action"]
  },
  {
    id: 2,
    title: "La vida es bella",
    popularity: 3.14147
  },
  {
    id: 3,
    title: "Another film title"
  }
];
describe("MoviesList", () => {
  let component = shallow(<MoviesList movies={movies} orderBy={"title"} />);

  it("renders two movies", () => {
    expect(component.find("li").length).toEqual(3);
  });

  it("should sort the movies using orderBy prop", () => {
    const movies = component.find("[data-title]");
    expect(movies.at(0).text()).toEqual("Another film title");
    expect(movies.at(1).text()).toEqual("La vida es bella");
  });

  it("should show the release date if available", () => {
    expect(
      component
        .find("[data-release-date]")
        .first()
        .text()
    ).toEqual("2001-12-10");
  });

  it("should render the genres availables", () => {
    const genres = component.find("li > span > span");
    expect(genres.at(0).text()).toEqual("Adventure");
    expect(genres.at(1).text()).toEqual("Fantasy");
    expect(genres.at(2).text()).toEqual("Action");
  });

  it("should show the popularity if available", () => {
    expect(
      component
        .find("li")
        .at(1)
        .contains(3.14147)
    ).toBe(true);
  });
});
