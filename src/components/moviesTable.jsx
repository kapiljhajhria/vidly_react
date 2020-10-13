import React from "react";
import LikeComponent from "./common/like_component";
import Table from "./common/table";
import {Link} from "react-router-dom";

function MoviesTable(props) {
    const {onLike, onDelete, movies, sortColumn, onSort} = props;

    const columns = [
        {path: 'title', label: "Title",content:movie=><Link to={`/movies/${movie._id}`}>{movie.title} </Link>},
        {path: 'genre.name', label: "Genre"},
        {path: 'numberInStock', label: "Stock"},
        {path: 'dailyRentalRate', label: "Rate"},
        {
            key: 'like', content: movie => <LikeComponent key={movie._id} liked={movie.liked}
                                                          onClick={() => onLike(movie)}/>
        },//for like button col
        {
            key: 'delete', content: movie => <button onClick={() => onDelete(movie)}
                                                     className="btn btn-danger btn-sm">Delete
            </button>
        },//for delete btn col
    ]
    return (
        <Table
            columns={columns}
            onSort={onSort}
            data={movies}
            sortColumn={sortColumn}
        />
    )
}

export default MoviesTable;