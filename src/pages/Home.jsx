import React from "react";
import CryptoList from "../components/crypto/CryptoList";
import Search from "../components/Search";
import { useContext } from "react";
import CryptoContext from "../context/CryptoContext";

function Home() {
  const { searchMode, dispatch } = useContext(CryptoContext);

  return (
    <>
      {searchMode && <Search />}
      <CryptoList />
    </>
  );
}

export default Home;
