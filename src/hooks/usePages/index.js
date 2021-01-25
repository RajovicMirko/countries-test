import useConfig from "./useConfig";
import { generateLinks, generateRoutes } from "./functions";

const usePages = () => {
  const { pages, generatePath } = useConfig();

  const routes = generateRoutes(pages); // for router map
  const navLinks = generateLinks(pages); // for navigation map

  return {
    navLinks,
    routes,
    generatePath,
  };
};

export default usePages;
