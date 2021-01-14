import "./Layout.scss";
import React from "react";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div id="layout">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
