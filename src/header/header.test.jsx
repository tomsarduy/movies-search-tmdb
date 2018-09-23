import { shallow } from "enzyme";
import React from "react";
import Header from "./header";

describe("Header", () => {
  it("renders correctly", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
