import "./NavBar.scss";
import React, { useContext } from "react";
import ThemeContext from "contexts/Theme";

// components
import ButtonFlat from "components/global/Button/Flat";

function NavBar() {
  const { changeTheme, isLightTheme } = useContext(ThemeContext);

  const _handleThemeChange = () => changeTheme();
  const buttonText = isLightTheme ? "Dark Mode" : "Light Mode";
  const buttonIcon = isLightTheme ? "far fa-moon" : "fas fa-moon";

  return (
    <section className="nav-bar">
      <section className="banner">
        <span>Where in the world?</span>
      </section>
      <section className="action">
        <ButtonFlat
          text={buttonText}
          icon={buttonIcon}
          onClick={_handleThemeChange}
        />
      </section>
    </section>
  );
}

export default NavBar;
