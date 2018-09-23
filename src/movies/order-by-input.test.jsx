import React from "react";
import OrderByInput from "./order-by-input.jsx";

describe("OrderByInput", () => {
  it("renders correctly", () => {
    const component = shallow(<OrderByInput onChange={() => null} />);
    expect(component).toMatchSnapshot();
  });

  it("should call onChange with the selected value on change", () => {
    const onChangeMock = jest.fn();
    const target = { value: "title" };
    const component = shallow(<OrderByInput onChange={onChangeMock} />);
    component.find("select").simulate("change", { target });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({ target });

    // Check with another value
    component
      .find("select")
      .simulate("change", { target: { value: "popularity" } });
    expect(onChangeMock).toBeCalledTimes(2);
    expect(onChangeMock).toHaveBeenCalledWith({
      target: { value: "popularity" }
    });
  });
});
