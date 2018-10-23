export const latLngReducer = (state = { lat: 0, lng: 0 }, action) => {
  switch (action.type) {
    case "ADD_LAT":
      return { ...state, lat: action.lat };

    case "ADD_LONG":
      return { ...state, lng: action.lng };

    default:
      return state;
  }
};
