import { createContext, useReducer } from "react";
import cryptoReducer from "./CryptoReducer";
const CryptoContext = createContext();
export const CryptoProvider = ({ children }) => {
  const initialState = {
    assets: [],
    asset: {},
    assetMarkets: [],
    loading: false,
    searchMode: false,
    currentPageAssets: [],
    currentPage: 1,
    exchangeRates: [],
    theme: JSON.parse(localStorage.getItem("theme")) || "dark",
    historicalPrices: [],
    searchOrder: [],
  };

  const [state, dispatch] = useReducer(cryptoReducer, initialState);
  return (
    <CryptoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoContext;
