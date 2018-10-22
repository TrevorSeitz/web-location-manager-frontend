export const getLocationsReducer = (
  state = {
    places: [],
    allPlaces: []
  },
  action
) => {
  switch (action.type) {
    case "GET_ALL":
      debugger;
      return action.allPlaces;

    case "GET_LOC":
      return action.places;

    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};
