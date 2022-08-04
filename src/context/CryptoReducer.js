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

    default:
      return state;
  }
};
export default cryptoReducer;
