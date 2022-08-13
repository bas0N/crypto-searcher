import React from "react";
import CryptoList from "../components/crypto/CryptoList";
import Search from "../components/layout/Search";
import { useContext } from "react";
import CryptoContext from "../context/CryptoContext";

function Home() {
  const { searchMode } = useContext(CryptoContext);

  return (
    <div className="flex flex-col h-full justify-between">
      {searchMode && <Search />}
      <CryptoList />
    </div>
  );
}

export default Home;
