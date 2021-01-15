import { useState, useEffect } from "react";
import http, { getApiUrl } from "utils/http";
import {
  COUNTRIES_API_ENDPOINT,
  COUNTRIES_BY_REGION_API_ENDPOINT,
  COUNTRIES_BY_3_CODE_API_ENDPOINT,
} from "utils/constants";

function useCountries() {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [regionOptions, setRegionOptions] = useState([]);
  const [regionFilterValue, setRegionFilterValue] = useState("");

  const setInitState = (data) => {
    setCountries(data);
    setFilteredCountries(data);
  };

  const fetchCountries = async () => {
    setIsLoading(true);
    const result = await http.get(COUNTRIES_API_ENDPOINT);
    prepareRegionOptions(result.data);
    setInitState(result.data);
    setIsLoading(false);
  };

  const fetchByAlpha3Code = async (code3char) => {
    setIsLoading(true);
    const url = `${COUNTRIES_BY_3_CODE_API_ENDPOINT}/${code3char}`;
    const result = await http.get(url);
    setCountry(result.data);
    setIsLoading(false);
  };

  useEffect(() => fetchBorderCountries(), [country]);
  const fetchBorderCountries = async () => {
    setIsLoading(true);
    if (!country.borders || !country.borders.length) return null;
    const query = {
      codes: country.borders.join(";"),
    };
    const url = getApiUrl(COUNTRIES_BY_3_CODE_API_ENDPOINT, query);

    const result = await http.get(url);
    setBorderCountries(result.data);
    setIsLoading(false);
  };

  // region options and filter logic
  const prepareRegionOptions = (allCountries) => {
    const regionsUnique = [
      ...new Set(allCountries.map((country) => country.region)),
    ].filter((region) => !!region);

    const optionsArray = regionsUnique.map((region) => ({
      key: region.toLowerCase(),
      value: region,
    }));

    setRegionOptions(optionsArray);
  };

  useEffect(() => fetchRegion(), [regionFilterValue]);

  const fetchRegion = async () => {
    setIsLoading(true);
    if (!regionFilterValue) return;

    const url = `${COUNTRIES_BY_REGION_API_ENDPOINT}/${regionFilterValue}`;
    const result = await http.get(url);
    setInitState(result.data);
    setIsLoading(false);
  };

  // search logic
  useEffect(() => searchCountries(), [searchValue]);

  const searchCountries = () => {
    if (!searchValue) setFilteredCountries(countries);

    const pattern = /^(<|<=|>|>=)[0-9]+$/;
    const lowerSearchValue = searchValue.trim().toLowerCase();
    const filterResult = countries.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        country.capital.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        country.region.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        (pattern.test(searchValue) &&
          eval(country.population + searchValue) &&
          country.population > 0)
      );
    });

    setFilteredCountries(filterResult);
  };

  return {
    isLoading,
    countries: filteredCountries,
    country,
    borderCountries,
    regionOptions,
    setSearchValue,
    setRegionFilterValue,
    fetchCountries,
    fetchByAlpha3Code,
  };
}

export default useCountries;
