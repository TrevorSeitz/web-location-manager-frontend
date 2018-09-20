export const addLat = mapLat => {
  debugger;
  return {
    type: "ADD_LAT",
    lat: mapLat
  };
};

export const addLong = mapLong => {
  return {
    type: "ADD_LONG",
    long: mapLong
  };
};
