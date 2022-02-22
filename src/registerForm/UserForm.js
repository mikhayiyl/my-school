import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Confirm from "./Confirm";
import FormDetails from "./FormDetails";
import PersonalDetails from "./PersonalDetails";
import ProgrammingDetails from "./ProgrammingDetails";
import Success from "./Success";
import { register } from "../services/RegisterUser";

import FormExtension from "./Forms/FormExtension";

export class UserForm extends FormExtension {
  state = {
    step: 1,
    data: {
      // form Details
      username: "",
      email: "",
      password: "",
      // personal details
      occupation: "",
      city: "",
      age: "",
      phone: "",
      // programming details
      level: "",
      language: "",
      list: "",
      experience: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().email().label("Email Address"),
    password: Joi.string().required().min(6).label("Password"),
    occupation: Joi.string().required().label("Occupation"),
    city: Joi.string().required().label("City"),
    age: Joi.string().required().label("Age"),
    phone: Joi.number().required().min(9).label("Phone Number"),
    level: Joi.string().required().label("Level of Programming"),
    language: Joi.string().required().label("Programming Language"),
    list: Joi.string().required().label("Programming Languages"),
    experience: Joi.string().required().label("Experience"),
  };

  // next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // prev step

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  async doSubmit() {
    try {
      await register(this.state.data);

      toast("Registered");
      window.location = "/success";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.name = error.response.data;
        toast.error(errors.name);
        this.setState({ errors });
      }
    }
  }

  render() {
    const { step, errors } = this.state;
    const {
      username,
      email,
      password,
      occupation,
      city,
      age,
      phone,
      level,
      language,
      list,
      experience,
    } = this.state.data;
    const values = {
      username,
      email,
      password,
      occupation,
      city,
      age,
      phone,
      level,
      language,
      list,
      experience,
    };

    switch (step) {
      case 1:
        return (
          <FormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            errors={errors}
          />
        );

      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            errors={errors}
          />
        );
      case 3:
        return (
          <ProgrammingDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            errors={errors}
          />
        );
      case 4:
        return (
          <Confirm
            submitting={this.handleSubmit}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        return <h4>errror</h4>;
    }
  }
}

export default UserForm;
