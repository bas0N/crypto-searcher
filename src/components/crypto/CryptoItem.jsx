import React from "react";

function CryptoItem({ name, index, price, change, marketCap }) {
  return (
    <div className="shadow-md bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg text-white pr-3 overflow-auto items-baseline ">
      <div className="flex flex-row py-6 px-3 justify-between items-center">
        <div className="mx-3 flex flex-col items-center">
          <h1 className="font-extrabold text-2xl lg:text-5xl text-white ">
            {index}
          </h1>
          <div className="text-slate-500">{name}</div>
        </div>

        <div className="flex">
          <div className="mx-3">
            <h3 className="border-b-2 text-sm text-slate-300 border-slate-500 ">
              Price
            </h3>
            <h1 className="font-extrabold lg:text-2xl mt-1">{price}$</h1>
          </div>
          <div className="mx-3">
            <h3 className="border-b-2 text-sm text-slate-300 border-slate-500">
              Change
            </h3>
            <h1 className="font-extrabold lg:text-2xl mt-1">{change}%</h1>
          </div>
          <div className="mx-3">
            <h3 className="border-b-2 text-sm text-slate-300 border-slate-500">
              Market cap
            </h3>
            <h1 className="font-extrabold lg:text-2xl mt-1">{marketCap}$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoItem;
