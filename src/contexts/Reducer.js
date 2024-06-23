const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
