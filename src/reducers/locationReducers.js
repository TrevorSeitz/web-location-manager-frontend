export const getLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOC":
      const places = action.payload;
      return places;
    case "GET_ALL":
      // debugger;
      return action.payload;

    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};
