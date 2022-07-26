import React from "react";
import CryptoItem from "./CryptoItem";
const indexes = [
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
];
function CryptoList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-9">
      {indexes.map((index) => (
        <CryptoItem
          name={index}
          index={"BTC"}
          price={4324}
          change={4.75}
          marketCap={234124}
        />
      ))}
    </div>
  );
}

export default CryptoList;
