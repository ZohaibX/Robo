import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "tachyons/css/tachyons.css"; // Css Library

import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";

// command to run sass => npm run compile:sass

// All Imports of Graphql are in graphql project app

// react-bootstrap is installed .. Important not for react bootstrap is in F:\Web\JavaScript Developement\React\React with Mosh - Mastering React\Course Final Practices
// semantic-ui-react is also installed and its great for creating forms -- its use is at F:\Web\JavaScript Developement\React\Semantic UI\Auth

// react-router-dom is installed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
