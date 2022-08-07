import React from "react";
import CryptoItem from "./CryptoItem";
import CryptoContext from "../../context/CryptoContext";
import { useContext, useEffect, useState } from "react";
import { data } from "../../assets/data";
import {
  getMultipleAssets,
  getExchangeRates,
} from "../../context/CryptoActions";
import Pagination from "../layout/Pagination";
import NotFound from "../../pages/NotFound";

function CryptoList() {
  const { loading, assets, dispatch, currentPageAssets, currentPage } =
    useContext(CryptoContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const execute = async () => {
      const assets = await getMultipleAssets();

      dispatch({ type: "GET_MULTIPLE_ASSETS", payload: assets.data });
    };
    execute();
  }, []);
  //pagination
  if (loading) {
    return <div>loading</div>;
  }
  if (assets.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="flex flex-col items-center gap-9">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-6 md:w-full">
        {currentPageAssets.map((index) => (
          <CryptoItem
            id={index.id}
            rank={index.rank}
            name={index.name}
            index={index.symbol}
            price={Number(index.priceUsd).toFixed(3)}
            change={`${Number(index.changePercent24Hr).toFixed(2)}`}
            marketCap={`${Number(index.marketCapUsd / 1000000000).toFixed(
              2
            )}bln`}
            key={index.rank}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default CryptoList;
