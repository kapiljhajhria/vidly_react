import React from "react";
import Joi from 'joi-browser';
import Form from "./common/form";

export default class LoginForm extends Form {
    state = {
        data: {
            username: "", password: ""
        },
        errors: {}
    }
    // username = React.createRef()

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }
    // componentDidMount() {
    //     // this.username.current.focus();
    // }
    doSubmit = () => {
        console.log("doSubmit called");
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}