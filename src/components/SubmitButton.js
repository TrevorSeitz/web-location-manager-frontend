import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import submit from "../submit";

const Buttons = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button>
    </div>
  );
};
export default connect()(Buttons);
