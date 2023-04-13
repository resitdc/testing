const initialState = {
  sampleState: [],
};

const sampleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case "SAMPLE":
    return {
      ...state,
      sampleState: payload,
    };

  case "CLEAR_STATE":
    return initialState;

  default:
    return state;
  }
};

export default sampleReducer;
