import React from "react";
import "./css/main.css";
import Card from "./components/card/card";

import SearchBox from "./components/searchBox/searchBox";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const getRobots = async () => {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setRobots(data);
    };
    getRobots();
    // setRobots(myRobots);
  }, []);

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox setSearchInput={setSearchInput} />
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "500px",
        }}
      >
        <Card Robots={robots} searchInput={searchInput} />
      </div>
    </div>
  );
}

export default App;
