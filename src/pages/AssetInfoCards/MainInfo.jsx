import React, { useEffect, useContext, useState } from "react";
import CryptoContext from "../../context/CryptoContext";
import CurrencyPicker from "../../components/shared/CurrencyPicker";
import { getExchangeRates } from "../../context/CryptoActions";
function MainInfo({ asset }) {
  const pricesWs = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin");
  let [price, setPrice] = useState(undefined);
  useEffect(() => {
    pricesWs.onmessage = function (msg) {
      price = JSON.parse(msg.data);
      setPrice(price.bitcoin);
      console.log(price.bitcoin);
    };
  }, []);
  return (
    <div className="p-6 h-full flex flex-col justify-between items-center ">
      <div className="flex flex-col md:flex-row justify-between md:items-end w-full mb-3">
        <h1 className="text-5xl font-extrabold mb-3">{asset.name}</h1>
        <div className="bg-base-100 rounded-lg p-3 flex items-end gap-3 ">
          <h2 className="font-extrabold">Price:</h2>
          <h1 className="text-3xl flex items-end gap-2">
            {price ? price : "LOADING"} <CurrencyPicker />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-3">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
