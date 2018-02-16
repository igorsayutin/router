import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

ReactDOM.render(
  <Router histiory={browserHistory}>
    <Route path="/" cpmponent={App}>
      <IndexRoute component={Home} />
      <Route path="admin" component={Admin} />
      <Route path="genre" component={Genre} />
    </Route>
  </Router>,
  document.getElementById("root")
);
