import React, { Component } from "react";
import axiosClient from "../axiosClient";

class LikesButton extends Component {
  state = { place: this.props.place };
  updateLikes() {
    this.setState(
      {
        ...this.state,
        place: {
          ...this.state.place,
          likes: this.state.place.likes + 1
        }
      },
      async () => {
        try {
          const submitMethod = "patch";
          const url = `/api/places/${this.state.id}`;
          axiosClient[submitMethod](url, this.state.place);
        } finally {
          return this.props.getLocations(
            null,
            this.props.bounds[0],
            this.props.bounds[1],
            this.props.bounds[2],
            this.props.bounds[3]
          );
        }
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <p>Likes: {this.state.place.likes}</p>
        <button type="button" onClick={() => this.updateLikes()}>
          Like
        </button>
      </React.Fragment>
    );
  }
}
export default LikesButton;
