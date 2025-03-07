import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Register from "./register";

const Main = ({ match }) => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={[`${match.path}/login`, `${match.path}`]}
            component={Login}
          />
          <Route
            exact
            path={[`${match.path}/register`, `${match.path}`]}
            component={Register}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;
