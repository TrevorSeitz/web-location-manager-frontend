import React, { Component } from "react";
import axios from "axios";

export default class FileUpload extends Component {
  state = {
    selectedFile: null
  };

  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  // fileChangeHandler = event => {
  //   const selectedFile = event.target.files[0];
  // };

  fileUploadHandler = () => {
    // console.log(this.state.selectedFile);
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("http/localhost:4000", fd);
    // .then(res => {
    //   console.log(res)
    // })
  };

  render() {
    return (
      // <form onSubmit={onSubmitHandler}>
      <div className="fileUpload">
        {/*<label>File Upload</label>*/}
        <div>
          <input type="file" onChange={this.fileSelectHandler} />
          {/*<button onSubmit={this.fileUploadHandler}>Upload!</button>*/}
        </div>
      </div>
      // </form>
    );
  }
}
