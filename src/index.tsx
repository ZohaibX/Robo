import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "tachyons/css/tachyons.css"; // Css Library

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/3-store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <App />}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// For PWA -- register it
serviceWorker.register();
