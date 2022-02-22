import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../registerForm/Forms/FormInput";
import { FormContainer, FormWrapper } from "./FormElements";
import FormExtension from "./Forms/FormExtension";
export class FormDetails extends FormExtension {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  disable = () => {
    const { values } = this.props;
    return !values.username || !values.email || !values.password;
  };
  render() {
    const { values, handleChange, errors } = this.props;
    return (
      <FormContainer>
        <FormWrapper className="form">
          <h1 className="title">Enter User Details</h1>
          <FormInput
            name="username"
            label="User Name"
            onChange={handleChange("username")}
            defaultValue={values.username}
            error={errors["username"]}
          />
          <br />

          <FormInput
            name="email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            error={errors["email"]}
          />
          <br />
          <br />

          <FormInput
            name="password"
            label="Password"
            type="Password"
            onChange={handleChange("password")}
            defaultValue={values.password}
            error={errors["password"]}
          />
          <br />

          <button
            disabled={this.disable()}
            onClick={this.continue}
            className="btn btn-warning"
          >
            Continue
          </button>
          <Link
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "#fff",
              textDecorationColor: "seashell",
              textDecorationLine: "underline",
              width: "60px",
              borderBottom: "3px solid #fff",
            }}
            to="/signin"
          >
            <p>Aready have an Account click to Login...</p>
          </Link>
        </FormWrapper>
      </FormContainer>
    );
  }
}

export default FormDetails;
