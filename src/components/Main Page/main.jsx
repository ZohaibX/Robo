import React from "react";
import Header from "../Header/header";
import SearchBox from "../searchBox/searchBox";
import Card from "../card/card";

const Main = ({ onSearchChange, robots, searchField }) => {
  return (
    <div>
      <Header />
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

export default Main;
