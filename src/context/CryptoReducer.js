const cryptoReducer = (state, action) => {
  switch (action.type) {
    case "GET_ASSETS":
      return {
        ...state,
        assets: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default cryptoReducer;
