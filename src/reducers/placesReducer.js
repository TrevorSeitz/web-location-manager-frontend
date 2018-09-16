export default function placesReducer(
  state = {
    photos: []
  },
  action
) {
  switch (action.type) {
    case "COUNT_PHOTOS":
      return state.photos.length;

    default:
      return state;
  }
}
