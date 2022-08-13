import React from "react";
import { Link } from "react-router-dom";
function CryptoItem({ asset }) {
  return (
    <Link to={`/asset/${asset.id}`}>
      <div className="shadow-md w-100 bg-neutral hover:bg-neutral-focus text-primary-content hover:cursor-pointer rounded-lg  pr-3 overflow-auto items-baseline w-ful ">
        <div className="flex flex-row py-6 px-3 justify-between items-center">
          <div className="mx-3 flex flex-col items-center">
            <h1 className="font-extrabold text-2xl md:text-5xl  ">
              {asset.symbol}
            </h1>
            <div className="">{asset.name}</div>
          </div>

          <div className="flex gap-3">
            <div className="mx-3 flex flex-col justify-between">
              <h3 className="border-b-2 text-sm  ">Price</h3>
              <h1 className="font-extrabold lg:text-2xl mt-1  	">
                {Number(asset.priceUsd).toFixed(3)}$
              </h1>
            </div>
            <div className="">
              <h3 className="border-b-2 text-sm">Rank</h3>
              <div className="font-bold text-2xl lg:text-5xl">{asset.rank}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CryptoItem;
