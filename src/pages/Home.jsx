import React from "react";
import CryptoList from "../components/crypto/CryptoList";
import Search from "../components/layout/Search";
import { useContext, useEffect } from "react";
import CryptoContext from "../context/CryptoContext";
import { getMultipleAssets } from "../context/CryptoActions";

function Home() {
  const { searchMode, dispatch } = useContext(CryptoContext);

  return (
    <div>
      {searchMode && <Search />}
      <CryptoList />
    </div>
  );
}

export default Home;
