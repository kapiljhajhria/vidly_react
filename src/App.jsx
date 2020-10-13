import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import {Route, Redirect, Switch} from 'react-router-dom'
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <main
                className="container">
                <Switch>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    {/*<Route path="/movies" render={(props) => <Movies {...props}/>}/>*/}
                    {/*<Route path="/customers" render={(props) => <Customers {...props}/>}/>*/}
                    {/*<Route path="/rentals" render={(props) => <Rentals {...props}/>}/>*/}
                    {/*<Route path="/not-found" render={(props) => <NotFound {...props}/>}/>*/}
                    <Redirect exact from="/" to="/movies"/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </React.Fragment>
);
}

export default App;
