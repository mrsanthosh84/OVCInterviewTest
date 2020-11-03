import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";
const API_USER_INFO = "https://jsonplaceholder.typicode.com/posts";

export const GET_DATA_LOADING = "GET_DATA_LOADING";
const getDataLoading = () => ({
  type: GET_DATA_LOADING
});

export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
});

export const GET_DATA_FAIL = "GET_DATA_FAIL";
const getDataFail = error => ({
  type: GET_DATA_FAIL,
  payload: error
});

export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const getPostSuccess = value => ({
  type: GET_POST_SUCCESS,
  payload: value
});


export const getData = () => async(dispatch) => {
  dispatch(getDataLoading());

  return await axios
    .get(API_BASE_URL)
    .then(res => {
      dispatch(getDataSuccess(res.data));
      return res;
    })
    .catch(error => {
      dispatch(getDataFail(error));
      return error;
    });
};



export const fetchUserData = (id) => async(dispatch) => {
  dispatch(getDataLoading());

  return await axios
    .get(API_USER_INFO + "?userId=" + id)
    .then(res => {
      dispatch(getPostSuccess(res.data));
      return res;
    })
    .catch(error => {
      dispatch(getDataFail(error));
      return error;
    });
};


