const FillRateReducer = (state = true, action) => {
  switch (action.type) {
    case "GET_STATUS":
      return !state;
    default:
      return state;
  }
};
export default FillRateReducer;