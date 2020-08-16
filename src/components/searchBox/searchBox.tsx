// event = React.SyntheticEvent<HTMLInputElement>

import React from "react";

export interface searchBoxProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox: React.FunctionComponent<searchBoxProps> = ({
  onSearchChange,
}): JSX.Element => {
  console.log("Search");
  return (
    <div className="pa2">
      <input
        type="search"
        name="search"
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
          onSearchChange(e)
        }
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Your Friend"
        id=""
      />
    </div>
  );
};

export default SearchBox;
