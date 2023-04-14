export const addResident = (value) => {
  return ({
    type: "ADD_RESIDENT",
    payload: value,
  });
};

export const seeResidentDetail = (value) => {
  return ({
    type: "SEE_DETAIL_RESIDENT",
    payload: value,
  });
};
