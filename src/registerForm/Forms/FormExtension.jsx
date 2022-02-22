import React, { Component } from "react";
import Joi from "joi-browser";
import FormInput from "./FormInput";
import SelectInput from "./selectInput";

export default class FormExtension extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = (input) => ({ currentTarget: target }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(target);
    if (errorMessage) errors[target.name] = errorMessage;
    else delete errors[target.name];

    const { data } = this.state;
    data[input] = target.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
  };

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <FormInput
        name={name}
        label={label}
        type={type}
        defaultValue={data[name]}
        error={errors[name]}
        onChange={this.handleChange(name)}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <SelectInput
        name={name}
        options={options}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary ">
        {label}
      </button>
    );
  }
}
