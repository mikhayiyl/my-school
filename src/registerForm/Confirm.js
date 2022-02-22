import React, { Component } from "react";
import { FormContainer, FormWrapper } from "./FormElements";

export class Confirm extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        // form Details
        username,
        email,
        // personal details
        age,
        occupation,
        city,
        phone,
        // programming details
        level,
        language,
        list,
        experience,
      },
    } = this.props;

    return (
      <FormContainer>
        <FormWrapper onSubmit={this.props.submitting}>
          <h1 className="title">Confirm Details</h1>
          <ul
            style={{
              padding: "2rem",
              fontSize: "1.3rem",
              listStyleType: "square",
            }}
          >
            <li>{username}</li>
            <li>{email}</li>
            <li>{occupation}</li>
            <li>{city}</li>
            <li>{age}</li>
            <li>{phone}</li>
            <li>{level}</li>
            <li>{language}</li>
            <li>{list}</li>
            <li>{experience}</li>
          </ul>
          <div>
            <button className="btn btn-warning m-2">Submit</button>
            <button onClick={this.back} className="btn btn-success">
              Back
            </button>
          </div>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default Confirm;
