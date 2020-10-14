import React from "react";
import Input from "./common/input";
import Joi from 'joi-browser';
import Form from "./common/form";

export default class LoginForm extends Form {
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

    doSubmit = () => {
        console.log("doSubmit called");
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
                        onChange={this.handleChange}
                        type={"text"}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleChange}
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