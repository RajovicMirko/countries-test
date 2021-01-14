import "./Countries.scss";
import React from "react";
import InputText from "components/global/Input/Text";
import Select from "components/global/Select";
import HoverBox from "components/global/effects/HoverBox";

function Countries() {
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
        <div>cards</div>
        <div>cards</div>
        <div>cards</div>
        <div>cards</div>
        <div>cards</div>
        <div>cards</div>
      </section>
    </section>
  );
}

export default Countries;
