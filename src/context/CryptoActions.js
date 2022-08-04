import { data } from "../assets/data";
export const getMultipleAssets = async () => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets/");
    return await response.json();
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
