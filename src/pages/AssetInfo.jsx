import React, { useContext, useEffect } from "react";
import CryptoContext from "../context/CryptoContext";
import { useParams, Link } from "react-router-dom";

import { getAsset, getMarketsForAsset } from "../context/CryptoActions";
function AssetInfo() {
  const { loading, asset, assetMarkets, dispatch } = useContext(CryptoContext);
  const params = useParams();
  let markets = [];
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const execute = async () => {
      //redirect to not found if needed
      const result = await getAsset(params.id);
      markets = await getMarketsForAsset(params.id);
      markets = markets.data.slice(1, 20);
      dispatch({ type: "SET_ASSET_MARKETS", payload: markets });
      dispatch({ type: "GET_ASSET", payload: result.data });
    };
    execute();
    const {
      id,
      rank,
      symbol,
      name,
      supply,
      maxSupply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
      vwap24Hr,
      explorer,
    } = asset;
  }, [dispatch, params.id]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 text-base-content">
      <div className="bg-base-300 col-span-2 card aspect-video">
        <div className="p-3">main info</div>
      </div>

      <div className="bg-base-300 card">
        <div className="p-3">exchange</div>
      </div>
      <div className="bg-base-300 card container aspect-square">
        <div className="p-3">rates</div>
      </div>
      <div className="bg-base-300 col-start-2 md:col-start-3 	 row-start-2 row-end-4 md:row-start-1 md:row-end-3 card  ">
        <div className="stats-vertical shadow aspect-[1/2] h-full overflow-x-hidden  ">
          {assetMarkets.map((market) => (
            <div className="stat">
              <div className="stat-title">Market</div>
              <div className="stat-value">{market.exchangeId}</div>
              <div className="stat-desc">
                {market.volumePercent || "No data"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="graph bg-base-300 col-span-2 md:col-span-3 card aspect-video">
        <div className="p-3">graph</div>
      </div>
    </div>
  );
}

export default AssetInfo;
