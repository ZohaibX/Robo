import { connect } from "react-redux";

const { setSearchField, requestRobots } = require("./1-actions");

// here we will map the properties we want to be in props ..
export const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

// dispatch means triggering an action
export const mapDispatchToProps = (dispatch) => {
  return {
    // normal Input function
    onSearchChange: (event) => {
      return dispatch(setSearchField(event)); // idk y but event.currentTarget.value is not working and just event is working
    },
    // async dispatch function
    onRequestRobots: () => dispatch(requestRobots),
  };
  // setSearchField is an action which wants text .
  // and onSearchChange will occur when we will call it in an input .. so it will be having event.currentTarget.value
};

export const Connect = (App) =>
  connect(mapStateToProps, mapDispatchToProps)(App);
