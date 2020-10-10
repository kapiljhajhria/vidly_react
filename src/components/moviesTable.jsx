import React from "react";
import LikeComponent from "./common/like_component";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

function MoviesTable(props) {
    const {onLike, onDelete, movies, sortColumn, onSort} = props;

    const columns = [
        {path: 'title', label: "Title"},
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
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody
                data={movies}
                columns={columns}
            />
        </table>
    )
}

export default MoviesTable;