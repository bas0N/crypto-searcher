import { data } from "../assets/data";
const sortFunction = (order, direction, assets) => {
  let sortedAssets = [];
  if (direction === "asc") {
    sortedAssets = assets.data.sort((a, b) => {
      if (a === b) {
        return 0;
      }

      return a[order] - b[order];
    });
  }
  if (direction === "dsc") {
    sortedAssets = assets.data.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      return b[order] - a[order];
    });
  }
  return sortedAssets;
};
export const getMultipleAssets = async (sortParams) => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets/");
    const assets = await response.json();
    let sortedAssets = assets.data;
    if (sortParams.length === 0) {
      return sortedAssets;
    }
    //Sort assets on the basis of sort parameters
    //Example:
    //[{order:'priceUsd'},{dir:'asc'}]
    const sortedResult = sortFunction(
      sortParams[0].order,
      sortParams[1].dir,
      assets
    );
    //return sorted Assets
    return sortedResult;
  } catch (e) {
    console.log(e);
  }
};
export const getExchangeRates = async () => {
  try {
    const response = await fetch("https://api.coincap.io/v2/rates/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const searchAssets = async (searchValue) => {
  try {
    const response = await fetch(
      `https://api.coincap.io/v2/assets/?search=${searchValue}`
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
export const getAsset = async (id) => {
  try {
    const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
    return await response.json();
  } catch (e) {
    console.log("Error: ", e);
  }
};
export const getMarketsForAsset = async (id) => {
  try {
    let response = await fetch(
      `https://api.coincap.io/v2/assets/${id}/markets`
    );
    response = await response.json();
    response = response.data.sort((a, b) => {
      if (!a) {
        a = 0;
      }
      if (!b) {
        b = 0;
      }
      return b.volumePercent - a.volumePercent;
    });
    return response;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const getHistoricalPrices = async (asset, interval) => {
  try {
    let response =
      await fetch(`https://api.coincap.io/v2/assets/${asset}/history?interval=${interval}
    `);
    const responseJson = await response.json();
    const responseReversed = responseJson.data.reverse();
    const responseSliced = responseReversed.slice(0, 19);
    const responseDateEdited = responseSliced.map((obj) => {
      const date = new Date(obj.date);
      return {
        ...obj,
        date: `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`,
      };
    });

    return responseDateEdited;
  } catch (e) {
    console.log("Error: ", e);
  }
};
