import { shallow } from "enzyme";
import React from "react";
import Header from "../Header/header";
import renderer from "react-test-renderer";

it("expect to render Header component", () => {
  const tree = renderer.create(<Header />).toJSON();

  expect(tree).toMatchSnapshot(); // for snapshot

  expect(shallow(<Header />).length).toEqual(1);

  // expect(shallow(<Header />)).toMatchSnapshot();
});
