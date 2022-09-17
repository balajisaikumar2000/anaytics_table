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
export const updateappData = (c) => {
  return {
    type: "UPDATE_APP_DATA",
    payload: c,
  };
};
export const getdatestatus = () => {
  return {
    type: "GET_STATUS",
  };
};
export const updatedatestatus = () => {
  return {
    type: "UPDATE_STATUS",
  };
};
