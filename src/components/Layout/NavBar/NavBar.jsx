import "./NavBar.scss";
import { useContext } from "react";
import { withRouter } from "react-router-dom";
import ThemeContext from "contexts/Theme";
// components
import ButtonFlat from "components/global/Button/Flat";

function NavBar(props) {
  const { changeTheme, isLightTheme } = useContext(ThemeContext);

  const bannerText = "Where in the world?";
  const buttonText = isLightTheme ? "Dark Mode" : "Light Mode";
  const buttonIcon = isLightTheme ? "far fa-moon" : "fas fa-moon";

  const _handleThemeChange = () => changeTheme();
  const _handleBannerClick = () => props.history.push("/");

  return (
    <section className="nav-bar">
      <section className="banner" onClick={_handleBannerClick}>
        <span>{bannerText}</span>
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
