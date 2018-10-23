import React, { Component } from "react";
// import axiosClient from "../axiosClient";

class LikesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // likes: this.props.place.likes
      place: this.props.place
    };
  }

  updateLikes() {
    //   debugger;
    //   this.setState(() => {
    //     return { likes: this.state.place.likes + 1 };
    //   });
    // }

    this.setState({
      ...state,
      place: {
        ...state.place,
        likes: this.state.place.likes + 1
      }
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
