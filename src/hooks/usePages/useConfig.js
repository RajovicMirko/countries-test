// pages
import Error404 from "app/pages/Error404";
import Countries from "app/pages/Countries";
import Country from "app/pages/Country";

const Config = () => {
  const pages = [
    {
      path: "/",
      name: "countries-home",
      component: Countries,
    },
    {
      path: "/error404",
      name: "error404",
      label: "Error404",
      component: Error404,
    },
    {
      path: "/countries-test",
      name: "countries",
      component: Countries,
      isNavLink: true,
    },
    {
      path: "/countries-test/country/:id",
      name: "country",
      component: Country,
      isNavLink: true,
    },
  ];

  const generatePath = ({ pageName, props }) => {
    let basePath = pages.find((p) => p.name === pageName).path;

    Object.keys(props).map((k) => {
      const paramStr = `:${k}`;
      basePath = basePath.replace(paramStr, props[k]);
    });

    return basePath;
  };

  return { pages, generatePath };
};

export default Config;
