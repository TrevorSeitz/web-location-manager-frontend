export const mapReducer = (
  state = {
    center: [],
    bounds: []
  },
  action
) => {
  switch (action.type) {
    // setCenterReducer
    case "SET_CENTER":
      return { ...state, center: action.center };

    // setBoundsReducer
    case "SET_BOUNDS":
      return { ...state, bounds: action.bounds };

    default:
      return state;
  }
};
