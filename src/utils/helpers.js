export const formatNumber = (number) => {
  if (number) {
    const formatPattern = /(\d)(?=(\d{3})+(?!\d))/g;
    return number.toString().replace(formatPattern, "$1,");
  } else {
    return null;
  }
};
