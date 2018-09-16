import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import submit from "../submit";

// const style = {
//   padding: "10px 20px",
//   width: 140,
//   display: "block",
//   margin: "20px auto",
//   fontSize: "16px"
// };
//
// const SubmitButton = ({ dispatch }) => (
//   <button
//     type="button"
//     style={style}
//     onClick={() => dispatch(submit("SimpleForm"))}
//     //                              ^^^^^^^^^^^^ name of the form
//   >
//     Submit
//   </button>
// );
//
// export default connect()(SubmitButton);

const Buttons = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  // Buttons

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
