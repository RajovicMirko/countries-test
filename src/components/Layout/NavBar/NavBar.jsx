import "./NavBar.scss";
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import ThemeContext from "contexts/Theme";

// components
import ButtonFlat from "components/global/Button/Flat";

function NavBar(props) {
  const { changeTheme, isLightTheme } = useContext(ThemeContext);

  const _handleThemeChange = () => changeTheme();
  const buttonText = isLightTheme ? "Dark Mode" : "Light Mode";
  const buttonIcon = isLightTheme ? "far fa-moon" : "fas fa-moon";

  const _handleBannerClick = () => {
    props.history.push("/");
  };

  return (
    <section className="nav-bar">
      <section className="banner" onClick={_handleBannerClick}>
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

export default withRouter(NavBar);
