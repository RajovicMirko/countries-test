import "./Countries.scss";
import React, { useEffect } from "react";
import useCountries from "hooks/useCountries";
import { formatNumber } from "utils/helpers";
// components
import HoverBox from "components/global/effects/HoverBox";
import InputText from "components/global/Input/Text";
import Select from "components/global/Select";
import Card from "components/global/Card";

function Countries() {
  const { countries, fetchCountries } = useCountries();

  useEffect(() => {
    fetchCountries();
  }, []);

  const filterOptions = [
    { key: "africa", value: "Africa" },
    { key: "america", value: "America" },
    { key: "asia", value: "Asia" },
    { key: "europe", value: "Europe" },
    { key: "oceania", value: "Oceania" },
  ];

  const handleSearch = (value) => {
    console.log("search value " + value);
  };

  const handleFilter = (value) => {
    console.log("filter value " + value);
  };

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
            defaultValue="Filter by Region"
            options={filterOptions}
            onChange={handleFilter}
          />
        </HoverBox>
      </section>
      <section className="cards">
        {countries &&
          countries.map((country) => (
            <Card
              key={country.alpha3Code}
              title={country.name}
              img={country.flag}
              description={{
                Population: formatNumber(country.population) || "N/A",
                Region: country.region || "N/A",
                Capital: country.capital || "N/A",
              }}
            />
          ))}
      </section>
    </section>
  );
}

export default Countries;
