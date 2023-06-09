const initialState = {
  residents: [],
  detail: {},
};

const residentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case "ADD_RESIDENT":
    return {
      ...state,
      residents: [...state.residents, ...[payload]],
    };

  case "SEE_DETAIL_RESIDENT":
    return {
      ...state,
      detail: payload,
    };

  case "CLEAR_STATE":
    return initialState;

  default:
    return state;
  }
};

export default residentReducer;
