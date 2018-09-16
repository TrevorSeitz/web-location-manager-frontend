import React, { Component } from "react";

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        age: "",
        gender: "",
        expertise: "",
        about: ""
      },

      genderOptions: ["Male", "Female", "Other"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, name: value }
    }));
  }
  handleAge(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, age: value }
    }));
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.value;
    this.setState(
      prevState => {
        return {
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        };
      },
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://localhost:4000", {
      methos: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Success" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        email: "",
        age: "",
        gender: "",
        expertise: "",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          type={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handlechange={this.handleInput}
        />{" "}
        {/* Name of User*/}
        <Input
          type={"number"}
          title={"Age"}
          nanme={"age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handlechange={this.handleAge}
        />{" "}
        {/* Input for Age*/}
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Gender"}
          handlechange={this.handleInput}
        />{" "}
        {/* Gender */}
        <TextArea
          title={"About"}
          rows={10}
          value={this.state.newUser.about}
          name={"about"}
          handleChange={this.handleTextArea}
          placeholder={"describe youself"}
        />{" "}
        {/* About */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/* Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear */}
      </form>
    );
  }
}
const buttonStyle = {
  margin: "10px"
};
export default FormContainer;
