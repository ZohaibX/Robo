//? IDEA
//! Always import the components which are to be shown on the main page ..
//! All other components must be imported from React.lazy()
import React from "react";
import "./css/main.css";
import { useEffect } from "react";
import { Connect } from "./redux/4-connect";
import Main from "./components/Main Page/main";

const App = (props) => {
  const { searchField, robots, isPending, error } = props;
  const { onSearchChange, onRequestRobots } = props;

  useEffect(() => {
    onRequestRobots();
  }, []);

  return (
    <div className="tc">
      <Main {...props} />
    </div>
  );
};

export default Connect(App);
