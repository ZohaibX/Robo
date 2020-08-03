import React from "react";
import "./css/main.css";
import Card from "./components/card/card";

import SearchBox from "./components/searchBox/searchBox";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Connect,
  mapDispatchToProps,
  mapStateToProps,
} from "./redux/4-connect";
import { connect } from "react-redux";

const App = (props) => {
  // const [searchInput, setSearchInput] = useState(""); now we'll use redux here

  const { searchField, robots, isPending, error } = props;
  const { onSearchChange, onRequestRobots } = props;

  useEffect(() => {
    onRequestRobots();
  }, []);

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox setSearchInput={onSearchChange} />
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "500px",
        }}
      >
        <Card Robots={robots} searchInput={searchField} />
      </div>
    </div>
  );
};

export default Connect(App);
