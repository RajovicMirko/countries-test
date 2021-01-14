import { useState } from "react";
import http from "utils/http";
import { COUNTRIES_API_ENDPOINT } from "utils/constants";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  const fetchCountries = async () => {
    const result = await http.get(COUNTRIES_API_ENDPOINT);
    console.log(result.data[0]);
    setCountries(result.data);
  };

  return {
    countries,
    fetchCountries,
  };
}

export default useCountries;
