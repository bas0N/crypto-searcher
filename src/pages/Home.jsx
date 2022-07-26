import React from "react";
import CryptoList from "../components/crypto/CryptoList";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <Search />
      <CryptoList />
    </>
  );
}

export default Home;
