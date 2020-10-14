import React from "react";
import Input from "./common/input";
import Joi from 'joi-browser';

export default class LoginForm extends React.Component {
    state = {
        data: {
            username: "", password: ""
        },
        errors: {}
    }
    username = React.createRef()

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    componentDidMount() {
        // this.username.current.focus();
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

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return

        console.log("submitted form")
        // console.log(this.username.current.value)
    }
    handleAccountChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);

        if (errorMessage) {
            errors[input.name] = errorMessage
        } else {
            delete errors[input.name];
        }
        const account = {...this.state.data}
        account[input.name] = input.value;
        this.setState({
            account, errors
        })
    }

    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={data.username}
                        label="Username"
                        onChange={this.handleAccountChange}
                        type={"text"}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleAccountChange}
                        type={"password"}
                        error={errors.password}
                    />
                    <button
                        className="btn btn-primary"
                        disabled={this.validate()}
                    >
                        Login
                    </button>
                </form>
            </div>
        )
    }
}