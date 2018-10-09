const locationsReducer = (
  state = {
    lat: 0,
    lng: 0
  },
  action
) => {
  switch (action.type) {
    // addLatReducer
    case "ADD_LAT":
      return { ...state, lat: action.lat };

    // addLongReducer
    case "ADD_LONG":
      return { ...state, lng: action.lng };

    default:
      return state;
  }
};
