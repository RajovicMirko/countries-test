import useConfig from "./useConfig";
import { generateLinks, generateRoutes } from "./functions";

const usePages = () => {
  const { pages } = useConfig();

  const routes = generateRoutes(pages); // for router map
  const navLinks = generateLinks(pages); // for navigation map

  return {
    navLinks,
    routes,
  };
};

export default usePages;
