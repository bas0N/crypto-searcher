import React, { useContext, useEffect } from "react";
import CryptoContext from "../context/CryptoContext";
import { useParams, Link } from "react-router-dom";
import Markets from "./AssetInfoCards/Markets";
import MainInfo from "./AssetInfoCards/MainInfo";
import { ChartEx } from "./AssetInfoCards/Chart";
import { getAsset, getMarketsForAsset } from "../context/CryptoActions";
import { getHistoricalPrices } from "../context/CryptoActions";
function AssetInfo() {
  const { loading, asset, assetMarkets, dispatch } = useContext(CryptoContext);
  const params = useParams();
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const execute = async () => {
      //redirect to not found if needed
      const result = await getAsset(params.id);
      const markets = await getMarketsForAsset(params.id);
      const historicalPrices = await getHistoricalPrices(params.id, "d1");

      dispatch({ type: "SET_ASSET_MARKETS", payload: markets });
      dispatch({ type: "GET_ASSET", payload: result.data });
      dispatch({
        type: "SET_HISTORICAL_PRICES",
        payload: historicalPrices,
      });
    };
    execute();
    //dispatch deleted
  }, [params.id]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 text-base-content mt-6">
      <div className="bg-base-300 col-span-2 card aspect-[7/10] lg:aspect-[2/1]">
        <MainInfo asset={asset} />
      </div>

      <div className="bg-base-300 card aspect-square">
        <div className="p-3">trades</div>
      </div>
      <div className="bg-base-300 card container aspect-square">
        <div className="p-3">rates</div>
      </div>
      <Markets assetMarkets={assetMarkets} />
      <div className="graph bg-base-300 col-span-2 md:col-span-3 card aspect-[2/1]">
        <div className="p-3">
          <ChartEx asset={asset.id} />
        </div>
      </div>
    </div>
  );
}

export default AssetInfo;
