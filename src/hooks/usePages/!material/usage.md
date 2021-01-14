# How to use pages hook

- [How to use pages hook](#how-to-use-pages-hook)
  - [Examples](#examples)
    - [Functional component](#functional-component)
    - [Description](#description)

## Examples

### Functional component

```javascript
import React, { useContext } from "react";
import usePages from "hooks/usePages"; // locales

function Home() {
  const { navLinks, routes } = usePages();

  // nav links
  <List
    component="nav"
    aria-labelledby="main navigation"
    className={classes.navDisplayFlex} // this
  >
    {navLinks.map((link) => (
      <ListItem key={link.name} button>
        <NavLink to={link.path} className={classes.linkText}>
          {link.label}
        </NavLink>
      </ListItem>
    ))}
  </List>;

  // router
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.name}
        exact
        path={route.path}
        component={route.component}
      />
    ))}
    <Redirect to="/error404" />
  </Switch>;
}

export default Home;
```

### Description

```
Use pages is a hook that prepares arrays for router and navigation links
```
