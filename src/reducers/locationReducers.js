export const getLocationsReducer = (
  state = { places: [], allPlaces: [] },
  action
) => {
  switch (action.type) {
    case "GET_LOC":
      const places = action.payload;
      return places;

    case "GET_ALL":
      const allPlaces = action.payload;
      return allPlaces;

    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};
