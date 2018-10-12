export default (
  state = {
    photos: [],
    name: "",
    venue: "",
    lat: "",
    lng: "",
    contactName: "",
    contactPhone: "",
    email: "",
    description: "",
    fileName: "",
    GPSLatitudeRef: "",
    GPSLongitudeRef: ""
  },
  action
) => {
  // should be in main reducer file
  switch (action.type) {
    case "COUNT_PHOTOS":
      return state.photos.length;

    default:
      return state;
  }
};
