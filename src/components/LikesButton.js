import React, { Component } from "react";
// import axiosClient from "../axiosClient";

class LikesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: this.props.place
    };
  }

  updateLikes() {
    // debugger;
    // this.setState(() => {
    //   return { likes: this.state.likes + 1 };
    // });
    this.setState({
      ...this.state,
      place: {
        ...this.state.place,
        likes: this.state.place.likes + 1
      }
    });
  }

  render() {
    return (
      <fragment>
        <p>Likes: {this.state.place.likes}</p>
        <button type="button" onClick={() => this.updateLikes()}>
          Like
        </button>
      </fragment>
    );
  }
}
export default LikesButton;
