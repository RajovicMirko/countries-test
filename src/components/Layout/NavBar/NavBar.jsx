import "./NavBar.scss";
import React, { useContext } from "react";
import ThemeContext from "contexts/Theme";

function NavBar() {
  const { changeTheme, isLightTheme } = useContext(ThemeContext);

  const _handleThemeChange = () => changeTheme();
  const buttonText = isLightTheme ? "Dark Mode" : "Light Mode";

  return (
    <nav>
      <section className="banner">
        <span>Where in the world?</span>
      </section>
      <section className="action">
        <button onClick={_handleThemeChange}>{buttonText}</button>
      </section>
    </nav>
  );
}

export default NavBar;
