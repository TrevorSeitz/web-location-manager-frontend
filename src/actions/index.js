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

export const getVisibleLocations = places => {
  return {
    type: "GET_LOC",
    payload: places
  };
};
