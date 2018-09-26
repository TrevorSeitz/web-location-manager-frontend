export const addLat = mapLat => {
  return {
    type: "ADD_LAT",
    lat: mapLat
  };
};

export const addLong = mapLong => {
  return {
    type: "ADD_LONG",
    lng: mapLong
  };
};

export const getVisibleLocations = (dispatch, xMin, xMax, yMin, yMax) => {
  // debugger;
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    fetch(
      `http://localhost:4000/api/places?min_lng=${xMin}&max_lng=${xMax}&min_lat=${yMin}&max_lat=${yMax}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(jsonData => dispatch({ type: "GET_LOC", payload: jsonData }));
  };
};
// };
