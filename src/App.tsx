//? IDEA
//! Always import the components which are to be shown on the main page ..
//! All other components must be imported from React.lazy()
import React from "react";
import "./css/main.css";

import Main from "./components/Main Page/main";
import { Connect } from "./redux/4-connect";

//? I converted this component in cc. to use typescript here

export interface IRobots {
  name: string;
  id: number;
  email: string;
}

// props will behave according to this interface
// if some value is not present in here . props will not use it or give an error
export interface Props {
  searchField: string;
  robots: Array<IRobots>;
  isPending: boolean;
  error: any;
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  onRequestRobots: any;
}

// State will work according to this interface .
// we cannot initialize any value in state .. if that value is not defined here
export interface State {
  robots: Array<IRobots>;
  searchField: string;
}

class App extends React.Component<Props, State> {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount(): void {
    // it is not returning anything
    this.props.onRequestRobots();
  }

  render(): JSX.Element {
    // it is returning jsx element
    return (
      <div className="tc">
        <Main {...this.props} />
      </div>
    );
  }
}

export default Connect(App);
