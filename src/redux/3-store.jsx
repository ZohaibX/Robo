import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from "./2-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware /*logger*/))
);
// logger is for console

export default store;
