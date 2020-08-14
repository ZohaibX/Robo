import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "../../redux/actionTypes";

import * as actions from "../../redux/1-actions";
import axios from "axios";

it("should create an action to search robots", () => {
  const text = "hello";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

// --------------------------------------------Async Portion Testing------------------------------------------------
// Here we will have to send dispatch function as a parameter
// so working is gonna be different Here

//! Idea is -- if axios request fails somehow, the error will occur

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
const mockStore = configureMockStore([thunkMiddleware]);

// this returning data can be anything... it is not payload or anything else .
// action will be having this data ..
// if axios request fails. then success() will not be having anything and our test will fail
// otherwise if axios request passes. then action will be having whatever data we provide to this function
function success() {
  return {
    type: "REQUEST_ROBOTS_SUCCESS",
  };
}

// If axios request fails somehow, then error will occur
function fetchData() {
  return (dispatch) => {
    return axios("https://jsonplaceholder.typicode.com/users") // Some async action with promise
      .then(({ data }) => dispatch(success()));
  };
}

it("handle Async request robots request", () => {
  const store = mockStore();

  return store.dispatch(fetchData()).then(() => {
    const actions = store.getActions();
    // actions[0] is having success() function's data (if axios request passes)
    expect(actions[0]).toEqual(success());
  });
});
