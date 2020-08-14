import { shallow } from "enzyme";
import React from "react";
import Card from "../card/card";
import renderer from "react-test-renderer"; // for snapshot

// we provide the mock data , the component needs
it("expect to render card components", () => {
  const mockRobots = [
    {
      id: 1,
      username: "zohaib",
      email: "111",
      name: "zohaib butt",
    },
    {
      id: 5,
      username: "Muzi",
      email: "111",
      name: "Muzi butt",
    },
    {
      id: 3,
      username: "kaka",
      email: "111",
      name: "Muzi butt",
    },
    {
      id: 2,
      username: "baby",
      email: "111",
      name: "Muzi butt",
    },
    {
      id: 4,
      username: "baby",
      email: "111",
      name: "bablu butt",
    },
  ];

  const mockSearchInput = "butt";

  // Snapshot Testing
  const tree = renderer
    .create(<Card Robots={mockRobots} searchInput={mockSearchInput} />)
    .toJSON();
  expect(tree).toMatchSnapshot();

  // expect(
  //   shallow(<Card Robots={mockRobots} searchInput={mockSearchInput} />).length
  // ).toEqual(1);
});
