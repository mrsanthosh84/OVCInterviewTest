import dataReducer from "./dataReducer";
import * as actions from "../actions/dataActions";
import expect from "expect";
import getDataMock from "../mocks/getDataMocks";
import getPostMock from "../mocks/getPostMock"

describe("post reducer", () => {
  it("should return the initial state", () => {
    expect(dataReducer(undefined, {})).toEqual({
      loading: false,
      data: [],
      value:[],
      errors: null
    });
  });

  it("should handle GET_DATA_LOADING", () => {
    const getDataLoading = {
      type: actions.GET_DATA_LOADING
    };

    expect(dataReducer({}, getDataLoading)).toEqual({
      loading: true
    });
  });

  it("should handle GET_DATA_SUCCESS", () => {
    const successAction = {
      type: actions.GET_DATA_SUCCESS,
      data: getDataMock.data
    };

    expect(dataReducer({}, successAction)).toEqual({
      loading: false,
      data: getDataMock.data
    });
  });

  it("should handle GET_DATA_FAIL", () => {
    const errorMessage = {
      status: 500,
      message: "Something Went Wrong :("
    };

    const errorAction = {
      type: actions.GET_DATA_FAIL,
      payload: errorMessage
    };

    expect(dataReducer({}, errorAction)).toEqual({
      errors: errorMessage,
      loading: false
    });
  });

  it("should handle GET_POST_SUCCESS", () => {
    const successAction = {
      type: actions.GET_POST_SUCCESS,
      data: getPostMock.data
    };

    expect(dataReducer({}, successAction)).toEqual({
      loading: false,
      data: getPostMock.data
    });
  });

});
