import React from "react";
import Main from "../Main Page/main";
import renderer from "react-test-renderer"; // for snapshot

let tree;
beforeEach(() => {
  const mockProps = {
    searchField: "",
    robots: [],
    onSearchChange: jest.fn(),
  };
  tree = renderer.create(<Main {...mockProps} />).toJSON();
});

// we provide the mock data , the component needs
it("renders main page without crashing", () => {
  expect(tree).toMatchSnapshot();
});
