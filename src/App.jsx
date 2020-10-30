import React from "react";
import {Route, Redirect, Switch} from 'react-router-dom'
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import MovieForm from "./components/movie_form";
import LoginForm from "./components/loginForm";
import "./App.css";
import RegisterForm from "./components/registerForm";


function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <main
                className="container">
                <Switch>
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    {/*<Route path="/movies" render={(props) => <Movies {...props}/>}/>*/}
                    {/*<Route path="/customers" render={(props) => <Customers {...props}/>}/>*/}
                    {/*<Route path="/rentals" render={(props) => <Rentals {...props}/>}/>*/}
                    {/*<Route path="/not-found" render={(props) => <NotFound {...props}/>}/>*/}
                    <Redirect exact from="/" to="/movies"/>
                    <Redirect exact from="/vidly_react" to="/movies"/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </React.Fragment>
);
}

export default App;
