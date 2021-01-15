import React, { useEffect } from "react";
import useCountries from "hooks/useCountries";
// components
import ControlesHeader from "components/Countries/ControlesHeader";
import Loading from "components/global/Loading";

function Countrie(props) {
  const { isLoading, country, fetchCountry3code } = useCountries();

  useEffect(() => {
    const country3code = props.match.params.id;
    fetchCountry3code(country3code);
  }, []);

  switch (true) {
    case isLoading:
      return <Loading text="Loading countries..." />;
    default:
      return (
        <>
          <ControlesHeader>header</ControlesHeader>
          <div>{JSON.stringify(country)}</div>;
        </>
      );
  }
}

export default Countrie;
