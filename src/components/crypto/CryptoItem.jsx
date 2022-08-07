import React from "react";
import { Link } from "react-router-dom";
function CryptoItem({ id, name, index, price, change, marketCap }) {
  return (
    <Link to={`/asset/${id}`}>
      <div className="shadow-md w-100 bg-neutral hover:bg-neutral-focus text-primary-content hover:cursor-pointer rounded-lg  pr-3 overflow-auto items-baseline w-ful ">
        <div className="flex flex-row py-6 px-3 justify-between items-center">
          <div className="mx-3 flex flex-col items-center">
            <h1 className="font-extrabold text-2xl lg:text-5xl  ">{index}</h1>
            <div className="">{name}</div>
          </div>

          <div className="flex">
            <div className="mx-3">
              <h3 className="border-b-2 text-sm  ">Price</h3>
              <h1 className="font-extrabold lg:text-2xl mt-1">{price}$</h1>
            </div>
            <div className="mx-3">
              <h3 className="border-b-2 text-sm  ">Change 24h</h3>
              <h1
                className={`font-extrabold lg:text-2xl mt-1 ${
                  change < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {change}%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CryptoItem;
