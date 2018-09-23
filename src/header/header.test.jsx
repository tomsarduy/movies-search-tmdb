import React from "react";

import Header from "./header";

import renderer from "react-test-renderer";

describe("Header renders correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Header />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
