import React from "react";
import Joi from "joi-browser";
import Input from "./input";

export default class Form extends React.Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = {abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};

        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return
        //calls API or any other task
        this.doSubmit();
        // console.log(this.username.current.value)
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        // console.log("error message",errorMessage)
        if (errorMessage) {
            errors[input.name] = errorMessage
        } else {
            delete errors[input.name];
        }
        const data = {...this.state.data}
        data[input.name] = input.value;
        // console.log("input",input)
        this.setState({
            data, errors
        })
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    renderButton(label) {
        return (
            <button
                className="btn btn-primary"
                disabled={this.validate()}
            >
                {label}
            </button>
        )
    }

    renderInput(name, label, type="text") {
        const {data, errors} = this.state;
        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                type={type}
                error={errors[name]}
            />
        )
    }
}