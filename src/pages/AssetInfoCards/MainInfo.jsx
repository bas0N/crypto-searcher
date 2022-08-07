import React, { useEffect, useContext, useState } from "react";
import CryptoContext from "../../context/CryptoContext";
import CurrencyPicker from "../../components/shared/CurrencyPicker";
import { getExchangeRates } from "../../context/CryptoActions";
function MainInfo({ asset }) {
  const { dispatch } = useContext(CryptoContext);
  const pricesWs = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin");
  let [price, setPrice] = useState(undefined);
  let [rates, setRates] = useState([]);
  useEffect(() => {
    pricesWs.onmessage = function (msg) {
      price = JSON.parse(msg.data);
      setPrice(price.bitcoin);
      console.log(price.bitcoin);
    };
  }, []);
  return (
    <div className="p-6 h-full flex flex-col justify-around items-center ">
      <div className="flex flex-col md:flex-row justify-between md:items-end w-full mb-3">
        <div className="flex mb-3 items-end">
          <h1 className="text-5xl font-extrabold mr-3">{asset.name}</h1>
          <h2 className="font-bold">symbol: {asset.symbol}</h2>
        </div>

        <div className="bg-base-100 rounded-lg p-3 flex justify-between items-end gap-3 ">
          <h2 className="font-extrabold">Price:</h2>
          <h1 className="text-3xl ">{price ? price : "LOADING "} $</h1>
        </div>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-3">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Supply</div>
            <div className="stat-value">{Number(asset.supply).toFixed(0)}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Market Cap</div>
            <div className="stat-value">{asset.marketCapUsd}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Percentage Change</div>
            <div
              className={`stat-value ${
                asset.changePercent24Hr < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {Number(asset.changePercent24Hr).toFixed(3)} %
            </div>
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
            <div className="stat-title">VWAP 24h</div>
            <div className="stat-value">
              {Number(asset.vwap24Hr).toFixed(2)}
            </div>
            <div className="stat-desc">Volume Weighted Average Price 24h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
