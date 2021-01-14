import React from "react";
import InputText from "components/global/Input/Text";

function Countries() {
  const handleChange = (value) => {
    console.log("search value " + value);
  };

  return (
    <section className="counties-page">
      <section className="controles">
        <InputText
          placeholder="Search for a country..."
          icon="fas fa-search"
          onChange={handleChange}
        />
      </section>
      <section className="grid"></section>
    </section>
  );
}

export default Countries;
