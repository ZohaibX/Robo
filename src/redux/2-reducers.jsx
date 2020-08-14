// it takes the action and spits out the state
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./actionTypes";

// ----------------------------------------------Reducers 1--------------------------------------------

const initialStateSearch = {
  searchField: "",
};
// in initial state .. searchField is empty .. and we do in normal states

// we cannot change our state . so we will have to recreate it with some changes we need
export const searchRobots = (state = initialStateSearch, action = {}) => {
  if (action.type === CHANGE_SEARCH_FIELD) {
    return { ...state, searchField: action.payload };
  } else return state; // reducers must be returning something
};

//--------------------------------------------Reducer 2--------------------------------------------------

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
// async reducer function
export const requestRobots = (state = initialStateRobots, action = {}) => {
  if (action.type === REQUEST_ROBOTS_PENDING) {
    return { ...state, isPending: true };
  } else if (action.type === REQUEST_ROBOTS_SUCCESS) {
    return { ...state, robots: action.payload, isPending: false };
  } else if (action.type === REQUEST_ROBOTS_FAILED) {
    return { ...state, error: action.payload, isPending: false };
  } else return state;
};
