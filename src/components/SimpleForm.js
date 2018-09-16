import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import FileUpload from "./FileUpload";
import submit from "../submit";
import axios from "axios";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

const blankForm = {
  locationName: "",
  venue: "",
  contactName: "",
  contactPhone: "",
  email: "",
  permitYes: "",
  permitNo: "",
  notes: ""
};
function reset() {
  this.setState(this.blankForm);
}

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      venue: "",
      contactName: "",
      contactPhone: "",
      email: "",
      permitYes: "",
      permitNo: "",
      notes: ""
    };
    this.blankForm = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let bob = this.state;
    alert(bob.locationName);
    // axios.post("http://locathost:4000/api/places");
    // reset();
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Location Name</label>
          <div>
            <Field
              name="locationName"
              component="input"
              type="text"
              placeholder="Location Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Venue/Region</label>
          <div>
            <Field
              name="venue"
              component="input"
              type="text"
              placeholder="Venue"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Contact Name</label>
          <div>
            <Field
              name="contactName"
              component="input"
              type="text"
              placeholder="Contact Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Contact Phone #</label>
          <div>
            <Field
              name="contactPhone"
              component="input"
              type="number"
              placeholder="Contact Phone #"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Contact Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <label>Permit Required?</label>
          <div>
            <label>
              <Field
                name="permitYes"
                component="input"
                type="radio"
                value="yes"
                onChange={this.handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <Field
                name="permitNo"
                component="input"
                type="radio"
                value="no"
                onChange={this.handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>
        {/* Favorite Color was here */}
        {/* employed Color was here */}
        <div>
          <label>Notes</label>
          <div>
            <Field
              name="notes"
              component="textarea"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="fileUpload">
          <FileUpload />
        </div>
        {/* Buttons here */}
        <div>
          <button
            type="submit"
            // disabled={pristine || submitting}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            // disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

// Favorite Color
// <div>
//   <label>Favorite Color</label>
//   <div>
//     <Field name="favoriteColor" component="select">
//       <option />
//       <option value="ff0000">Red</option>
//       <option value="00ff00">Green</option>
//       <option value="0000ff">Blue</option>
//     </Field>
//   </div>
// </div>

// Employed
// <div>
//   <label htmlFor="employed">Employed</label>
//   <div>
//     <Field
//       name="employed"
//       id="employed"
//       component="input"
//       type="checkbox"
//     />
//   </div>
// </div>

// export default SimpleForm;

// SimpleForm = reduxForm({
//   form: "simple" // a unique identifier for this form
// })(SimpleForm);
//
// export default SimpleForm;

export default reduxForm({
  form: "simple", // a unique identifier for this form
  onSubmit: submit
})(SimpleForm);
