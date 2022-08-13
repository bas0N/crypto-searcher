const cryptoReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "GET_MULTIPLE_ASSETS":
      return {
        ...state,
        assets: action.payload,
        currentPage: 1,
        loading: false,
      };
    case "GET_ASSET":
      return {
        ...state,
        asset: action.payload,
        loading: false,
      };
    case "TOGGLE_SEARCH_MODE":
      return { ...state, searchMode: !state.searchMode };
    case "SET_CURRENT_PAGE_ASSETS":
      return { ...state, currentPageAssets: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload, loading: false };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "SET_ASSET_MARKETS":
      return { ...state, assetMarkets: action.payload, loading: false };
    case "SET_EXCHANGE_RATES":
      return { ...state, exchangeRates: action.payload, loading: false };
    case "SET_HISTORICAL_PRICES":
      return { ...state, historicalPrices: action.payload, loading: false };
    case "SET_SEARCH_ORDER":
      return { ...state, searchOrder: action.payload, loading: false };
    default:
      return state;
  }
};
export default cryptoReducer;
