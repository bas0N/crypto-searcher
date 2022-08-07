import React from "react";

function Markets({ assetMarkets }) {
  return (
    <div className="bg-base-300 col-start-2 md:col-start-3 	 row-start-2 row-end-4 md:row-start-1 md:row-end-3 card  ">
      <div className="stats-vertical shadow aspect-[1/2] h-full overflow-x-hidden  ">
        {assetMarkets.map((market) => (
          <div className="stat overflow-auto">
            <div className="stat-title">Market</div>
            <div className="text-2xl font font-extrabold">
              {market.exchangeId}
            </div>
            <div className="stat-desc">
              {market.volumePercent
                ? "Market share: " +
                  Math.round(market.volumePercent * 100) / 100 +
                  " %"
                : "No data"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Markets;
