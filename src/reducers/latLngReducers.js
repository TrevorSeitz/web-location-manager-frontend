export const addLatReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAT":
      return action.lat;

    default:
      return state;
  }
};

export const addLongReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LONG":
      return action.lng;

    default:
      return state;
  }
};
