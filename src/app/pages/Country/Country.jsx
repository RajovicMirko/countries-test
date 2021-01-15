import "./Country.scss";
import React, { useEffect } from "react";
import useCountries from "hooks/useCountries";
import { formatNumber } from "utils/helpers";
// components
import ControlesHeader from "components/Countries/ControlesHeader";
import ButtonStrech from "components/global/Button/Strech";
import Loading from "components/global/Loading";

function Countrie(props) {
  const { isLoading, country, fetchCountry3code } = useCountries();

  useEffect(() => {
    const country3code = props.match.params.id;
    fetchCountry3code(country3code);
  }, []);

  const topLevelDomain = country.topLevelDomain
    ? country.topLevelDomain[0]
    : "";

  const currencies =
    country.currencies && country.currencies.map((cur) => cur.code).join(", ");

  const languages =
    country.languages && country.languages.map((lng) => lng.name).join(", ");

  const Description = ({ id, value }) => {
    return (
      <div className="description">
        <span className="id">{id}: </span>
        <span className="value">{value}</span>
      </div>
    );
  };

  const handleGoBack = () => {
    props.history.goBack();
  };

  switch (true) {
    case isLoading:
      return <Loading text="Loading country..." />;
    default:
      return (
        country && (
          <section className="country">
            <ControlesHeader>
              <ButtonStrech
                icon="fas fa-arrow-left"
                onClick={handleGoBack}
                style={{ width: "105px" }}
              >
                Back
              </ButtonStrech>
            </ControlesHeader>
            <section className="data">
              <section className="left-data">
                <img src={country.flag} alt={country.country3code} />
              </section>
              <section className="right-data">
                <section className="title">{country.name}</section>
                <section className="descriptions">
                  <section className="left">
                    <Description id="Native Name" value={country.nativeName} />
                    <Description
                      id="Population"
                      value={formatNumber(country.population)}
                    />
                    <Description id="Region" value={country.region} />
                    <Description id="Sub Region" value={country.subregion} />
                    <Description id="Capital" value={country.capital} />
                  </section>
                  <section className="right">
                    <Description id="Top Level Domain" value={topLevelDomain} />
                    <Description id="Currencies" value={currencies} />
                    <Description id="Languages" value={languages} />
                  </section>
                </section>
              </section>
            </section>
          </section>
        )
      );
  }
}

export default Countrie;
