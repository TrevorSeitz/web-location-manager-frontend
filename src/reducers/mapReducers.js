export const setCenterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CENTER":
      return action.center;

    default:
      return state;
  }
};

export const setBoundsReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_BOUNDS":
      return action.bounds;

    default:
      return state;
  }
};
