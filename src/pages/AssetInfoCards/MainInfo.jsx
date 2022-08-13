import React, { useEffect, useContext, useState } from "react";
import CryptoContext from "../../context/CryptoContext";

function MainInfo({ asset }) {
  const {} = useContext(CryptoContext);
  const pricesWs = new WebSocket(
    `wss://ws.coincap.io/prices?assets=${asset.id}`
  );
  let [price, setPrice] = useState(undefined);
  useEffect(() => {
    pricesWs.onmessage = function (msg) {
      let price = JSON.parse(msg.data);
      setPrice(price[asset.id]);
    };
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="p-6 h-full flex flex-col justify-start items-center overflow-y-auto">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between  w-full mb-3">
        <div className="flex mb-3 items-end">
          <h1 className="text-5xl font-extrabold mr-3">{asset.name}</h1>
          <h2 className="font-bold">symbol: {asset.symbol}</h2>
        </div>

        <div className="bg-base-100 rounded-lg p-3 flex justify-between items-end gap-3 ">
          <h2 className="font-extrabold">Price:</h2>
          <h1 className="text-3xl ">{price ? price : "LOADING "} $</h1>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 w-full">
        <div className="stats shadow w-full">
          <div className="stat text-ellipsis		">
            <div className="stat-title ">Supply (units)</div>
            <div className="text-2xl font-extrabold lg:text-4xl ">
              ${Number(asset.supply).toFixed(0)}
            </div>
            <div className="stat-desc ">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow overflow-hidden">
          <div className="stat">
            <div className="stat-title ">Market Cap (bln)</div>
            <div className=" text-2xl font-extrabold lg:stat-value">
              ${Number(asset.marketCapUsd / 100000000).toFixed(2)}
            </div>
            <div className="stat-desc break-normal">Price x Supply</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="over lg:stat-title break-normal">
              Percentage Change
            </div>
            <div
              className={`text-2xl font-extrabold lg:stat-value ${
                asset.changePercent24Hr < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {asset.changePercent24Hr < 0 ? "" : "+"}
              {Number(asset.changePercent24Hr).toFixed(3)} %
            </div>
            <div className="stat-desc break-normal ">
              Percentage value change, last 24h
            </div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Volume USD 24H (mln)</div>
            <div className=" text-2xl font-extrabold lg:stat-value">
              ${Number(asset.volumeUsd24Hr / 1000000).toFixed(2)}
            </div>
            <div className="stat-desc">
              Quantity of trading volume, last 24h
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">VWAP 24h</div>
            <div className=" text-2xl stat-value">
              ${Number(asset.vwap24Hr).toFixed(2)}
            </div>
            <div className="stat-desc">Volume Weighted Average Price 24h</div>
          </div>
        </div>
        <div className="stats shadow overflow-hidden">
          <button
            onClick={() => openInNewTab(asset.explorer)}
            className="stat hover:bg-base-200 cursor-pointer  flex items-center justify-center"
          >
            <div className="text-xl font-extrabold  lg:stat-value">
              EXPLORER
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
