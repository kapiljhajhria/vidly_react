import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import LikeComponent from "./common/like_component";
import Pagination from "./common/pagination_component";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenre: "",
    }

    componentDidMount() {
        this.setState({
            genres: getGenres(),
            movies: getMovies()
        })
    }

    handleDelete = movie => {
        const moviesArray = this.state.movies.filter(m => m._id !== movie._id);
        // console.log(movie)
        this.setState({
            movies: moviesArray
        })
    }
    handleLike = movie => {
        console.log("liked event occurred")
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie)
        console.log(movie)
        console.log(index)
        console.log(movies[index].liked)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        // movies[index] = !movie.liked
        console.log(movies[index].liked)
        this.setState({
            movies
        })
    };
    handlePageChange = (pageNo) => {
        const movies = [...this.state.movies]
        console.log("page no is" + pageNo)
        this.setState({currentPage: pageNo})
    }
    handleGenreChange = (genre) => {
        console.log("selected genre is " + genre)
        this.setState({selectedGenre: genre})
    }

    render() {
        const {length: moviesCount} = this.state.movies;
        const {pageNo, pageSize, currentPage, movies: allMovies, selectedGenre} = this.state;
        if (moviesCount === 0)
            return <p>There are no Movies in the database</p>

        //get selected genres and then paginate
        const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup items={this.state.genres}
                               onItemSelect={this.handleGenreChange}
                        // textProperty="name"
                        // valueProperty="_id"
                               selectedItem={this.state.selectedGenre}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><LikeComponent key={movie._id} liked={movie.liked}
                                               onClick={() => this.handleLike(movie)}/>
                            </td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
                    <Pagination
                        onPageChange={this.handlePageChange}
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }

}

export default Movies;