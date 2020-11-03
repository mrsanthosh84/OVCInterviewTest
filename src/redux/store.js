import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

// initial store state
const initialState = {};

// create a middleware array, includes thunk to begin with, but we can add to this array later
const middleware = [thunk];

// combine our reducers
const reducers = combineReducers({
  data: dataReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    // spread operator used to grab all middlewares from array if there is any more
    applyMiddleware(...middleware)
  )
);

export default store;