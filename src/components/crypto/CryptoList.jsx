import React from "react";
import CryptoItem from "./CryptoItem";
import CryptoContext from "../../context/CryptoContext";
import { useContext, useEffect } from "react";
const indexes = [
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
];

function CryptoList() {
  useEffect(() => {
    fetchAssets();
  }, []);
  const fetchAssets = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const assets = await response.json();
    console.log(assets);
  };
  //const { assets, loading } = useContext(CryptoContext);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-9">
      {indexes.map((index) => (
        <CryptoItem
          name={index}
          index={"BTC"}
          price={4324}
          change={4.75}
          marketCap={234124}
        />
      ))}
    </div>
  );
}

export default CryptoList;
