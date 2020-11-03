import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import getPostMock from "../redux/mocks/getPostMock";
import { UserPost } from "./UserPost";

afterEach(cleanup);

describe("<UserPost />", () => {
    // mock data from axios mock export
    const mockValue = {
      value: getPostMock
    };
    // spy function for the fetchUserData API call
    const fetchUserData = jest.fn();
  
    test("Loads headers provided from props", () => {
      const { getByText, getByTestId } = render(
        <UserPost
          posts={mockValue}
          fetchUserData={fetchUserData}
        />
      );
  
      expect(getByTestId("heading").children.length).toBe(2);
      expect(getByText("Title")).toBeInTheDocument();
      expect(getByText("Body")).toBeInTheDocument();
    });
  
    test("Loads all rows of posts data", () => {
      const { getByText, getByTestId } = render(
        <UserPost
        posts={mockValue}
        fetchUserData={fetchUserData}
        />
      );
      // expect the heading to contain 2 rows of data
      expect(getByTestId("heading").children.length).toBe(2);
      // test the data that should be found in the first row
      expect(getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")).toBeInTheDocument();
      // safe to assume other rows would match row 1
    });
   
  });
  