import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import {getMovie, saveMovie} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";

export default class cMovieForm extends Form {

    state = {
        data: {
            title: "random title", genreId: "", numberInStock: "", dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    }


    mapToViewModel(movieDetails) {
            return {
                _id:movieDetails._id,
                title:movieDetails.title,
                genreId:movieDetails.genre._id,
                numberInStock:movieDetails.numberInStock,
                dailyRentalRate:movieDetails.dailyRentalRate
            }
    }


    componentDidMount() {
        const tempState = this.state;
        const {id: movieID} = this.props.match.params;
        if (movieID === "new") return null;

        const movieDetails = getMovie(movieID)
        if (!movieDetails) this.props.history.push("/not-found")


        this.setState({data: this.mapToViewModel(movieDetails)})

    }

    schema = {
        title: Joi.string().required().label("Title").min(3),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().label("Number In Stock").min(0).max(100),
        dailyRentalRate: Joi.number().required().label("Rate").min(0).max(10)
    }


    doSubmit = () => {
        console.log("doSubmit called, submit new movie or edit current movie");
        saveMovie(this.state.data);
        this.props.history.push("/movies")
    }

    render() {
        const {id: movieID} = this.props.match.params;
        const movieDetails = getMovie(movieID) || {}
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {/*{this.renderInput("genre", "Genre", "Genre")}*/}
                    {this.renderSelect("genre", "Genre", getGenres())}
                    {this.renderInput("numberInStock", "Number In Stock",)}
                    {this.renderInput("dailyRentalRate", "Rate",)}
                    {this.renderButton("Save")}
                </form>
            </div>
        )
    }

}