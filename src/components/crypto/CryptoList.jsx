import React from "react";
import CryptoItem from "./CryptoItem";
import CryptoContext from "../../context/CryptoContext";
import { useContext, useEffect, useState } from "react";

function CryptoList() {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    fetchAssets();
    console.log(assets);
  }, []);
  const fetchAssets = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const assets = await response.json();
    setAssets(assets.data);
    console.log(assets.data);
  };
  console.log(assets); //const { assets, loading } = useContext(CryptoContext);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-9">
      {assets.map((index) => (
        <CryptoItem
          name={index.name}
          index={index.symbol}
          price={Number(index.priceUsd).toFixed(3)}
          change={`${Number(index.changePercent24Hr).toFixed(2)}`}
          marketCap={`${Number(index.marketCapUsd / 1000000000).toFixed(2)}bln`}
        />
      ))}
    </div>
  );
}

export default CryptoList;
