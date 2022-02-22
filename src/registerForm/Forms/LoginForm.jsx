import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FormExtension from "./FormExtension";

import authService, { login } from "../../services/authService";
import { Navigate } from "react-router-dom";
import { FormContainer, FormWrapper } from "../FormElements";

export default class LoginForm extends FormExtension {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email Address"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
  };

  async doSubmit() {
    try {
      await login(this.state.data);
      toast("Success");
      // window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
        toast.error(errors.username);
      }
    }
  }

  render() {
    if (authService.getCurrentUser()) return <Navigate to="/" />;
    const { seconds } = this.props;
    return (
      <FormContainer>
        <ToastContainer />
        <FormWrapper onSubmit={this.handleSubmit} className="form">
          <h1>Login</h1>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
          <Link
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "#fff",
              width: "60px",
              textDecorationColor: "seashell",
              textDecorationLine: "underline",
            }}
            to="/register"
          >
            {seconds > 0 ? <p>Register</p> : ""}
          </Link>
        </FormWrapper>
      </FormContainer>
    );
  }
}
