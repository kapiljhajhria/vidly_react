import React from "react";
import Input from "./common/input";
import Joi from 'joi-browser';

export default class LoginForm extends React.Component {
    state = {
        account: {
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
        const result = Joi.validate(this.state.account, this.schema, {abortEarly: false});
        if (!result.error) return null;

        const errors = {};

        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({name, value}) => {
        if (name === "username") {
            if (value.trim() === "") return "username is required";
        }
        if (name === "password") {
            if (value === "") return "password is required";
        }
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
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({
            account, errors
        })
    }

    render() {
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleAccountChange}
                        type={"text"}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleAccountChange}
                        type={"password"}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}