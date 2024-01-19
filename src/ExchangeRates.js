import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const ExchangeRates = ({ currency }) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exchangeRates, setCurrencyRates] = useState({});

  const getExchangeRates = useCallback(async () => {
    const url = `https://v6.exchangerate-api.com/v6/72179b357c84d84fcb2c1f3d/latest/${currency}`;
    try {
      setLoading(true);
      const { conversion_rates: conversionRates } = await fetch(
        url
      ).then((response) => response.json());
      setCurrencyRates(conversionRates);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [currency]);

  useEffect(() => {
    getExchangeRates();
  }, [currency, getExchangeRates]);

  if (error) {
    return <div>Opss, there's an error...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {Object.entries(exchangeRates).map(([currencyCode, rate]) => (
          <li key={currencyCode}>
            {currencyCode}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

ExchangeRates.propTypes = {
  currency: PropTypes.string.isRequired
};

export default ExchangeRates;
