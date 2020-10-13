import React from "react";

export default class LoginForm extends React.Component {
    username=React.createRef()


    componentDidMount() {
        this.username.current.focus();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted form")
        console.log(this.username.current.value)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input ref={this.username} id="username" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}