// pages
import Error404 from "app/pages/Error404";
import Countries from "app/pages/Countries";
import Country from "app/pages/Country";

const Config = () => {
  const pages = [
    {
      path: "/error404",
      name: "error404",
      label: "Error404",
      component: Error404,
    },
    {
      path: "/",
      name: "Countries",
      component: Countries,
      isNavLink: true,
    },
    {
      path: "/country/:id",
      name: "Country",
      component: Country,
      isNavLink: true,
    },
  ];

  return { pages };
};

export default Config;
