import React, { useState } from "react";
import ExchangeRates from "./ExchangeRates";

export default function App() {
  const [currencies] = useState(["USD", "EUR", "BRL", "PEN", "ARS"]);
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="App">
      <h1>Select Currency</h1>
      <select
        value={currency}
        onChange={(event) => setCurrency(event.currentTarget.value)}
      >
        {currencies.map((currencyItem) => (
          <option key={currencyItem} value={currencyItem}>
            {currencyItem}
          </option>
        ))}
      </select>
      <ExchangeRates currency={currency}></ExchangeRates>
    </div>
  );
}
