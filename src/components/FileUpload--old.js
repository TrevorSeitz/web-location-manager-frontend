import React from "react";
import { Field, reduxForm } from "redux-form";
import submit from "../submit";
import ExifReader from "exifreader";
import { post } from "axios";

export const FileUpload = props => {
  const { handleSubmit } = props;
  const onFormSubmit = data => {
    let formData = new FormData();
    // formData.append("name", data.name);
    formData.append("profile_pic", data.profile_pic[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    const url = "http://localhost:4000/api/places";
    post(url, formData, config)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Picture</label>
        <Field name="profile_pic" component="input" type="file" />
      </div>
      <button onSubmit={this.fileUploadHandler}>Upload!</button>
    </form>
  );
};

export default reduxForm({
  form: "fileupload"
})(FileUpload);

// render() {
//   const { handleSubmit, pristine, reset, submitting } = this.props;
//   return (
//     <form onSubmit={this.fileUploadHandler}>
//       <div className="fileUpload">
//         {/*<label>File Upload</label>*/}
//         <div>
//           <input type="file" onChange={this.fileSelectHandler} />
//           <button onSubmit={this.fileUploadHandler}>Upload!</button>
//         </div>
//       </div>
//     </form>
//   );
// }
// }
