import React from "react";
import CryptoList from "../components/crypto/CryptoList";
import Search from "../components/Search";
import { useContext } from "react";
import CryptoContext from "../context/CryptoContext";

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
