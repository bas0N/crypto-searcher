import React, { useContext, useEffect } from "react";
import CryptoContext from "../context/CryptoContext";
import { useParams, Link } from "react-router-dom";

import { getAsset } from "../context/CryptoActions";
function AssetInfo() {
  const { loading, asset, dispatch } = useContext(CryptoContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const execute = async () => {
      //redirect to not found if needed
      const result = await getAsset(params.id);
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
  return <div>{asset.id}</div>;
}

export default AssetInfo;
