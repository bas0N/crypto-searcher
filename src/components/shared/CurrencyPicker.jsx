import React, { useEffect, useContext, useState } from "react";
import CryptoContext from "../../context/CryptoContext";
function CurrencyPicker() {
  const { dispatch, exchangeRates } = useContext(CryptoContext);
  const [selectedRate, setSelectedRate] = useState(exchangeRates[0]);
  return (
    <div>
      <select
        className="select"
        value={selectedRate}
        onSelect={() => setSelectedRate()}
      >
        {exchangeRates.map((currency) => (
          <option>{currency.symbol}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyPicker;
