export const getData = () => {
  return {
    type: "GET_DATA",
  };
};
export const updateData = (d) => {
  return {
    type: "UPDATE_DATA",
    payload: d,
  };
};
