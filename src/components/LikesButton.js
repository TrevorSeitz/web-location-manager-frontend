import React, { Component } from "react";
// import axiosClient from "../axiosClient";

class LikesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.place.likes
    };
  }

  updateLikes() {
    debugger;
    this.setState(() => {
      return { likes: this.state.likes + 1 };
    });
  }

  render() {
    return (
      <fragment>
        <p>Likes: {this.state.likes}</p>
        <button type="button" onClick={() => this.updateLikes()}>
          Like
        </button>
      </fragment>
    );
  }
}
export default LikesButton;
