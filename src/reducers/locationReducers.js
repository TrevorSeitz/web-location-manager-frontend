export const getLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LOC":
      const places = action.payload;
      return places;

    default:
      return state;
  }
};

export const getAllLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;

    default:
      return state;
  }
};

export const delPlaceReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_PLACE":
      return state.filter(({ place }) => place.id !== action.id);

    default:
      return state;
  }
};
