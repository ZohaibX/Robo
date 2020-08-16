import React from "react";
import Header from "../Header/header";
import SearchBox from "../searchBox/searchBox";
import Card from "../card/card";
import { IRobots } from "../../App";

export interface MainProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  robots: Array<IRobots>;
  searchField: string;
}

const Main: React.FunctionComponent<MainProps> = ({
  onSearchChange,
  robots,
  searchField,
}): JSX.Element => {
  return (
    <div>
      <Header />
      <SearchBox onSearchChange={onSearchChange} />
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
