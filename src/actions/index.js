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

export const getVisibleLocations = (
  dispatch,
  min_lng,
  max_lng,
  min_lat,
  max_lat
) => {
  // debugger;
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    fetch(
      `http://localhost:4000/api/places?min_lng=${min_lng}&max_lng=${max_lng}&min_lat=${min_lat}&max_lat=${max_lat}`,
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
