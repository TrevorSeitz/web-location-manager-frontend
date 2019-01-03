export const getLocationsReducer = (
  state = {
    places: [],
    allPlaces: []
  },
  action
) => {
  switch (action.type) {
    // getLocationsReducer
    case "GET_LOC":
      return { ...state, places: action.places };

    // getAllLocationsReducer
    case "GET_ALL":
      // debugger;
      return { ...state, allPlaces: action.allPlaces };

    // delPlaceReducer
    case "DELETE_PLACE":
      return state.allPlaces.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};
