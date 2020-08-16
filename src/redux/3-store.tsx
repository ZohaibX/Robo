import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from "./2-reducers.jsx";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootReducer: any = combineReducers({ searchRobots, requestRobots });
const logger: any = createLogger();

const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware /*logger*/))
);
// logger is for console

export default store;
