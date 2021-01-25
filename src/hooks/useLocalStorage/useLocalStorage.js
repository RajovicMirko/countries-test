function useLocalStorage() {
  const LS = localStorage;

  const setLs = (key, value) => {
    LS.setItem(key, JSON.stringify(value));
    return value;
  };

  const getLs = (key) => {
    const result = LS.getItem(key);
    return JSON.parse(result);
  };

  const hasLs = (key) => {
    return !!getLs(key);
  };

  return {
    setLs,
    getLs,
    hasLs,
  };
}

export default useLocalStorage;
