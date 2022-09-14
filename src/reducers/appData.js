const AppDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_APP_DATA":
      return [];
    case "UPDATE_APP_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
export default AppDataReducer;
