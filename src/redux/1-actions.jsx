import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./actionTypes";
import axios from "axios";

// Setting search text in a state
export const setSearchField = (text) => ({
  // we wanna recieve text here
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// async action function
export const requestRobots = async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
