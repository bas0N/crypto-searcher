const cryptoReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "GET_MULTIPLE_ASSETS":
      return { ...state, assets: action.payload, loading: false };
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
    default:
      return state;
  }
};
export default cryptoReducer;
