import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import usePages from "hooks/usePages";

function Router() {
  // routes are prepared in usePages hook
  const { routes } = usePages();

  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact
          key={route.name}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect to="/error404" />
    </Switch>
  );
}

export default Router;
