import React, { Component } from "react";
// import SubmitEdit from "./SubmitEdit";
import axiosClient from "../axiosClient";

class LikesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: this.props.place
    };
  }

  updateLikes() {
    this.setState({
      ...this.state,
      place: {
        ...this.state.place,
        likes: this.state.place.likes + 1
      }
    });

    const submitMethod = "patch";
    const url = `/api/places/${this.state.id}`;
    axiosClient[submitMethod](url, this.state.place).then(response => {
      return this.props.getLocations(
        null,
        this.props.bounds[0],
        this.props.bounds[1],
        this.props.bounds[2],
        this.props.bounds[3]
      );
    });
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
