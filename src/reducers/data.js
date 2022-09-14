const DataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return [];
    case "UPDATE_DATA":
      return action.payload;
    default:
      return [];
  }
};
export default DataReducer;
