import { data } from "../assets/data";
export const getMultipleAssets = async () => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
export const getExchangeRates = async () => {
  console.log("esa");
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
