import React from "react";
import Input from "./common/input";

export default class SignupForm extends React.Component {
    state = {
        newAccount: {
            username: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted form")
        // console.log(this.username.current.value)
    }
    handleAccountChange = ({currentTarget: input}) => {
        const newAccount = {...this.state.account}
        newAccount[input.name] = input.value;
        this.setState({
            newAccount
        })
    }

    render() {
        const {newAccount} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    name="username"
                    value={newAccount.username}
                    label="Username"
                    onChange={this.handleAccountChange}
                    type={"text"}
                />
                <Input
                    name="password"
                    value={newAccount.password}
                    label="Password"
                    onChange={this.handleAccountChange}
                    type={"password"}
                />
                <Input
                    name="confirmPassword"
                    value={newAccount.confirmPassword}
                    label="ConfirmPassword"
                    onChange={this.handleAccountChange}
                    type={"password"}
                />
                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        )
    }
}