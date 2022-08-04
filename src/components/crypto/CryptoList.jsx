import React from "react";
import CryptoItem from "./CryptoItem";
import CryptoContext from "../../context/CryptoContext";
import { useContext, useEffect, useState } from "react";
import { data } from "../../assets/data";
import { getMultipleAssets } from "../../context/CryptoActions";

function CryptoList() {
  const { loading, assets, dispatch } = useContext(CryptoContext);
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const execute = async () => {
      const assets = await getMultipleAssets();
      dispatch({ type: "GET_MULTIPLE_ASSETS", payload: assets.data });
    };
    execute();
  }, [dispatch]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-6">
      {assets.map((index) => (
        <CryptoItem
          id={index.id}
          name={index.name}
          index={index.symbol}
          price={Number(index.priceUsd).toFixed(3)}
          change={`${Number(index.changePercent24Hr).toFixed(2)}`}
          marketCap={`${Number(index.marketCapUsd / 1000000000).toFixed(2)}bln`}
          key={index.rank}
        />
      ))}
    </div>
  );
}

export default CryptoList;
