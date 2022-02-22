import React, { Component } from "react";
import { FormContainer, FormWrapper } from "./FormElements";

export class Success extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location = "/signin";
    }, 4000);
  }

  render() {
    return (
      <FormContainer>
        <FormWrapper>
          <h6 style={{ fontWeight: 600, fontSize: "1.5rem" }}>
            Thank You for Your Submission
          </h6>
          <p>Come back later and check your Approval </p>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default Success;
