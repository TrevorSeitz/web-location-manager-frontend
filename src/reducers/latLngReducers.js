export const LatLngReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_LAT":
      return action.lat;

    case "ADD_LONG":
      return action.lng;

    default:
      return state;
  }
};
