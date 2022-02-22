import React from "react";
import FormInput from "../registerForm/Forms/FormInput";
import SelectInput from "./Forms/selectInput";
import FormExtension from "./Forms/FormExtension";
import { FormContainer, FormWrapper } from "./FormElements";
export class ProgrammingDetails extends FormExtension {
  state = {
    options: [
      { name: "None", _id: "none" },
      { name: "PYTHON", _id: "python" },
      { name: "JAVASCRIPT", _id: "javascript" },
      { name: "HTML/CSS", _id: "css" },
      { name: "C", _id: "c" },
      { name: "C#", _id: "c#" },
      { name: "NODE Js", _id: "node" },
      { name: "PHP", _id: "php" },
      { name: "REACT NATIVE", _id: "native" },
    ],
    level: [
      { name: "None", _id: "none" },
      { name: "Not Yet", _id: "l1" },
      { name: "Beginner", _id: "l2" },
      { name: "Inter-Mediate", _id: "l3" },
      { name: "Semi-pro", _id: "l4" },
      { name: "Professional", _id: "l5" },
      { name: "Advanced", _id: "l6" },
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
    return (
      !values.level || !values.language || !values.list || !values.experience
    );
  };
  render() {
    const { values, handleChange, errors } = this.props;
    return (
      <FormContainer>
        <FormWrapper className="form">
          <h1 className="title">Programming Info</h1>
          <SelectInput
            name="level"
            options={this.state.level}
            label="Level of Programming "
            onChange={handleChange("level")}
            defaultValue={values.level}
            error={errors["level"]}
          />
          <br />
          <SelectInput
            name="language"
            options={this.state.options}
            label="Your Favorite Programming Language"
            onChange={handleChange("language")}
            defaultValue={values.language}
            error={errors["language"]}
          />

          <br />
          <FormInput
            name="list"
            placeholder="i.e Python Javascript C C#"
            label="List the Languages you have experience/knowledge"
            onChange={handleChange("list")}
            defaultValue={values.list}
            error={errors["list"]}
          />

          <br />

          <FormInput
            name="experience"
            placeholder="i.e 2years"
            label="Programming Experience"
            onChange={handleChange("experience")}
            defaultValue={values.experience}
            error={errors["experience"]}
          />
          <br />
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

export default ProgrammingDetails;
