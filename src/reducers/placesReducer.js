export default (
  state = {
    photos: [],
    locationName: "",
    venue: "",
    lat: "",
    lng: "",
    contactName: "",
    contactPhone: "",
    email: "",
    permitYes: "",
    permitNo: "",
    notes: "",
    fileName: ""
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
