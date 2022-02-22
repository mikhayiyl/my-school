import React, { Component } from "react";
import { FormContainer, FormWrapper } from "./FormElements";

export class Deadline extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location = "/";
    }, 4000);
  }

  render() {
    return (
      <FormContainer>
        <FormWrapper>
          <h6 style={{ fontWeight: 600, fontSize: "1.5rem" }}>
            We are Sorry Registration Dealine Duration is Over
          </h6>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default Deadline;
