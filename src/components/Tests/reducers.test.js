import * as reducers from "../../redux/2-reducers";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "../../redux/actionTypes";

describe("Search Robots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should go to the else field and return initial state simply", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should change the searchField when action CHANGE_SEARCH_FIELD is passed", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "Zohaib",
      })
    ).toEqual({ searchField: "Zohaib" });
  });
});

// --------------------------------------------Async Portion Testing------------------------------------------------
describe("Request Robots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should go to the else field and return initial state simply", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      ...initialStateRobots,
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      ...initialStateRobots,
      robots: [
        {
          id: 1,
          name: "test",
          email: "test@gmail.com",
        },
      ],
      isPending: false,
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "error",
      })
    ).toEqual({
      ...initialStateRobots,
      error: "error",
      isPending: false,
    });
  });
});
