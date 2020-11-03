import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import getDataMock from "../redux/mocks/getDataMocks";
import { Table } from "./Table";

afterEach(cleanup);

describe("<Table />", () => {
  // mock data from axios mock export
  const mockData = {
    data: getDataMock
  };
  // spy function for the getData API call
  const getData = jest.fn();

  test("Loads headers provided from props", () => {
    const { getByText, getByTestId } = render(
      <Table
        headings={["Name", "Email", "City", "Company"]}
        users={mockData}
        getData={getData}
      />
    );

    expect(getByTestId("heading").children.length).toBe(4);
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("City")).toBeInTheDocument();
    expect(getByText("Company")).toBeInTheDocument();
  });

  test("Loads all rows of user data", () => {
    const { getByText, getByTestId } = render(
      <Table
        headings={["Name", "Email", "City", "Company"]}
        users={mockData}
        getData={getData}
      />
    );
    // expect the body to contain 10 rows of data
    expect(getByTestId("body").children.length).toBe(10);
    // test the data that should be found in the first row
    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByText("Sincere@april.biz")).toBeInTheDocument();
    expect(getByText("Gwenborough")).toBeInTheDocument();
    expect(getByText("Romaguera-Crona")).toBeInTheDocument();
    // safe to assume other rows would match row 1
  });
});
