import React from "react";

const SearchBox = ({ setSearchInput }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        name="search"
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Your Friend"
        id=""
      />
    </div>
  );
};

export default SearchBox;
