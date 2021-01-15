import "./Countries.scss";
import React, { useEffect } from "react";
import useCountries from "hooks/useCountries";
import { formatNumber } from "utils/helpers";
// components
import HoverBox from "components/global/effects/HoverBox";
import InputText from "components/global/Input/Text";
import Select from "components/global/Select";
import Card from "components/global/Card";
import Loading from "components/global/Loading";
import NoData from "components/global/NoData";

function Countries(props) {
  const {
    isLoading,
    countries,
    regionOptions,
    setRegionFilterValue,
    setSearchValue,
    fetchCountries,
  } = useCountries();

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleFilter = (value) => {
    if (value) setRegionFilterValue(value);
  };

  const handleCardClick = (country3code) => {
    props.history.push(`/country/${country3code}`);
  };

  switch (true) {
    case isLoading:
      return <Loading text="Loading countries..." />;

    default:
      return (
        <section className="countries">
          <section className="controles">
            <HoverBox>
              <InputText
                placeholder="Search for a country..."
                icon="fas fa-search"
                onChange={handleSearch}
              />
            </HoverBox>

            <HoverBox>
              <Select
                defaultText="Filter by Region"
                options={regionOptions}
                onChange={handleFilter}
              />
            </HoverBox>
          </section>

          {!!countries.length && (
            <section className="cards">
              {countries &&
                countries.map((country) => (
                  <Card
                    key={country.alpha3Code}
                    id={country.alpha3Code}
                    title={country.name}
                    img={country.flag}
                    description={{
                      Population: formatNumber(country.population) || "N/A",
                      Region: country.region || "N/A",
                      Capital: country.capital || "N/A",
                    }}
                    onClick={handleCardClick}
                  />
                ))}
            </section>
          )}

          {!countries.length && <NoData />}
        </section>
      );
  }
}

export default Countries;
