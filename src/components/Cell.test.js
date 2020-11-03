import React from "react";
import {  shallow } from "enzyme";
import Cell from "./Cell";
import expect from "expect";

describe("<Cell />", () => {
  it("Renders without Crashing", () => {
     shallow(<Cell />);
  });

  it("Renders a Heading Cell", () => {
    const wrapper = shallow(<Cell header={true} content={"Name"} />);
    expect(wrapper.hasClass("Cell-header")).toBe(true);
  });

  it("Renders a tBody Cell", () => {
    const wrapper = shallow(<Cell header={false} />);
    expect(wrapper.hasClass("Cell-header")).toBe(false);
  });
});