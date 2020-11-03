import moxios from "moxios";
import expect from "expect";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

import * as actions from "./dataActions";

import getDataMock from "../mocks/getDataMocks";
import getPostMock from "../mocks/getPostMock";
import getErrorMock from "../mocks/getErrorMocks";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getData actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates GET_DATA_SUCCESS after successfully fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getDataMock
      });
    });

    const expectedActions = [
      { type: actions.GET_DATA_LOADING },
      { type: actions.GET_DATA_SUCCESS, payload: getDataMock }
    ];

    const store = mockStore({ loading: false, data: [], errors: null });

    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates GET_DATA_FAIL after successfully fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: getErrorMock
      });
    });

   
    const store = mockStore({ loading: false, data: [], errors: null });

    return store.dispatch(actions.getData()).then(() => {
      const act = store.getActions();
      expect(act[0].type).toEqual( actions.GET_DATA_LOADING );
      expect(act[1].type).toEqual(actions.GET_DATA_FAIL);
    });
  });
  
});

describe("fetchUserData actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates GET_POSTS_SUCCESS after successfully fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getPostMock
      });
    });

    const expectedActions = [
      { type: actions.GET_DATA_LOADING },
      { type: actions.GET_POST_SUCCESS, payload: getPostMock }
    ];

    const store = mockStore({ loading: false, value: [], errors: null });

    return store.dispatch(actions.fetchUserData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates GET_DATA_FAIL after successfully fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: getErrorMock
      });
    });

   
    const store = mockStore({ loading: false, value: [], errors: null });

    return store.dispatch(actions.fetchUserData()).then(() => {
      const act = store.getActions();
      expect(act[0].type).toEqual( actions.GET_DATA_LOADING );
      expect(act[1].type).toEqual(actions.GET_DATA_FAIL);
    });
  });
  
});
