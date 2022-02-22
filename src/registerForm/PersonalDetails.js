import React, { Component } from "react";
import FormInput from "../registerForm/Forms/FormInput";
import { FormContainer, FormWrapper } from "./FormElements";
import Select from "./Forms/selectInput";
export class PersonalDetails extends Component {
  state = {
    age: [
      { name: "None ", _id: "f" },
      { name: "below 18 years", _id: "a" },
      { name: " 18 - 22 years", _id: "b" },
      { name: " 22 - 26 years", _id: "c" },
      { name: " 26 - 30 years", _id: "d" },
      { name: " above 30 years", _id: "e" },
    ],
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  disable = () => {
    const { values } = this.props;
    return !values.age || !values.occupation || !values.city || !values.phone;
  };
  render() {
    const { values, handleChange, errors } = this.props;
    return (
      <FormContainer>
        <FormWrapper className="form">
          <h1 className="title">Personal Details</h1>
          <FormInput
            name="occupation"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            error={errors["occupation"]}
          />

          <br />
          <FormInput
            name="city"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            error={errors["city"]}
          />
          <br />
          <br />

          <Select
            options={this.state.age}
            name="age"
            label="Age"
            onChange={handleChange("age")}
            defaultValue={values.age}
            error={errors["age"]}
          />
          <br />
          <FormInput
            name="phone"
            label="Phone"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
            error={errors["phone"]}
          />
          <div>
            <button
              disabled={this.disable()}
              onClick={this.continue}
              className="btn btn-warning m-2"
            >
              Continue
            </button>
            <button onClick={this.back} className="btn btn-success">
              Back
            </button>
          </div>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default PersonalDetails;
