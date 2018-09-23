import React from "react";
import SearchInput from "./search-input.jsx";

describe("OrderByInput", () => {
  it("renders correctly", () => {
    const component = shallow(<SearchInput onChange={() => null} />);
    expect(component).toMatchSnapshot();
  });

  it("should call onChange with the selected value on change", () => {
    const onChangeMock = jest.fn();
    const target = { value: "typing..." };
    const component = shallow(<SearchInput onChange={onChangeMock} />);
    component.find("input").simulate("change", { target });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({ target });
  });
});
