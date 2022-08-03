export const getAssets = async () => {
  try {
    const response = await fetch("api.coincap.io/v2/assets");
    const assets = await response.json();
    return assets;
  } catch (e) {
    console.log("Error: ", e);
  }
};
