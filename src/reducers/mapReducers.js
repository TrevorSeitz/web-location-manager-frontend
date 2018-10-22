export const mapReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_CENTER":
      return action.center;

    case "SET_BOUNDS":
      return action.bounds;

    default:
      return state;
  }
};
