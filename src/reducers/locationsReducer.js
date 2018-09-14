export default function locationReducer(
  state = {
    photos: []
  },
  action
) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return state.photos.length;

    default:
      return state;
  }
}
