import React, { useEffect, useContext } from "react";
import CryptoContext from "../../context/CryptoContext";
import { getExchangeRates } from "../../context/CryptoActions";
function CurrencyPicker() {
  const { dispatch, exchangeRates } = useContext(CryptoContext);
  //   useEffect(() => {
  //     dispatch({ type: "SET_LOADING" });

  //     const execute = async () => {
  //       const rates = await getExchangeRates("bitcoin");
  //       dispatch({ type: "SET_EXCHANGE_RATES", payload: rates.data });
  //     };
  //     execute();
  //   }, []);

  return (
    <div>
      <select className="select">
        <option>$</option>
        <option>€</option>
        <option>£</option>
        <option>¥</option>
        <option>CHF</option>
      </select>
    </div>
  );
}

export default CurrencyPicker;
