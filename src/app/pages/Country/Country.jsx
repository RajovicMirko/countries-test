import "./Country.scss";
import React, { useEffect } from "react";
import usePages from "hooks/usePages";
import useCountries from "hooks/useCountries";
import { formatNumber } from "utils/helpers";
// components
import ControlesHeader from "components/Countries/ControlesHeader";
import ButtonStrech from "components/global/Button/Strech";
import Loading from "components/global/Loading";
import HoverBox from "components/global/effects/HoverBox";
import Description from "components/Countries/Description";

function Country(props) {
  const alpha3CodeParamsId = props.match.params.id;
  const { generatePath } = usePages();
  const {
    isLoading,
    country,
    borderCountries,
    fetchByAlpha3Code,
  } = useCountries();

  // init fetch country data
  useEffect(() => {
    fetchByAlpha3Code(alpha3CodeParamsId);
  }, [alpha3CodeParamsId]);

  const handleGoBack = () => {
    props.history.goBack();
  };

  const handleBorderCountryClick = (alpha3Code) => {
    const url = generatePath({
      pageName: "country",
      props: {
        id: alpha3Code,
      },
    });
    props.history.push(url);
  };

  const topLevelDomain = country.topLevelDomain
    ? country.topLevelDomain[0]
    : "";

  const currencies =
    country.currencies && country.currencies.map((cur) => cur.code).join(", ");

  const languages =
    country.languages && country.languages.map((lng) => lng.name).join(", ");

  const renderBorderCountries = (
    <Description className="borders" id="Border Countries">
      <section className="border-countries">
        {borderCountries.map((border) => (
          <HoverBox key={border.alpha3Code} className="hover-border-countries">
            <ButtonStrech
              id={border.alpha3Code}
              className="btn-borders"
              onClick={handleBorderCountryClick}
            >
              {border.name}
            </ButtonStrech>
          </HoverBox>
        ))}
      </section>
    </Description>
  );

  switch (true) {
    case isLoading:
      return <Loading text="Loading country..." />;
    default:
      return (
        country && (
          <section className="country">
            <ControlesHeader>
              <HoverBox className="hover-custom">
                <ButtonStrech icon="fas fa-arrow-left" onClick={handleGoBack}>
                  Back
                </ButtonStrech>
              </HoverBox>
            </ControlesHeader>
            <section className="data">
              <section className="left-data">
                <img src={country.flag} alt={country.alpha3Code} />
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

                {!!borderCountries.length && renderBorderCountries}
              </section>
            </section>
          </section>
        )
      );
  }
}

export default Country;
