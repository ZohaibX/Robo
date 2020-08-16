import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./1-actions";

// here we will map the properties we want to be in props ..
export const mapStateToProps = (state: any) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

// dispatch means triggering an action
export const mapDispatchToProps = (dispatch: any) => {
  return {
    // normal Input function
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => {
      return dispatch(setSearchField(event.currentTarget.value));
      // Here we are using event.currentTarget.value ...
      // so make sure we send whole event to this function
      // if i send event.currentTarget.value from there .. then it will not work
    },
    // async dispatch function
    onRequestRobots: () => dispatch(requestRobots),
  };
  // setSearchField is an action which wants text .
  // and onSearchChange will occur when we will call it in an input .. so it will be having event.currentTarget.value
};

export const Connect = (App: any) =>
  connect(mapStateToProps, mapDispatchToProps)(App);
