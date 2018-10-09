export const setBounds = bounds => {
  return {
    type: "SET_BOUNDS",
    bounds: bounds
  };
};

export const setCenter = (centerLat, centerLng) => {
  let center = { centerLat, centerLng };
  return {
    type: "SET_CENTER",
    center: center
  };
};
