export const generateRoutes = (pages) => pages;

export const generateLinks = (pages) => {
  return pages.filter((page) => page.isNavLink);
};
