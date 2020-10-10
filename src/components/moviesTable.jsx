import React from "react";
import LikeComponent from "./common/like_component";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

function MoviesTable(props) {
    const {onLike, onDelete, movies,sortColumn,onSort} = props;

    const columns = [
        {path: 'title', label: "Title"},
        {path: 'genre.name', label: "Genre"},
        {path: 'numberInStock', label: "Stock"},
        {path: 'dailyRentalRate', label: "Rate"},
        {key:'like'},//for like button col
        {key:'delete'},//for delete btn col
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
            <tbody>
            {movies.map(movie => <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><LikeComponent key={movie._id} liked={movie.liked}
                                   onClick={() => onLike(movie)}/>
                </td>
                <td>
                    <button onClick={() => onDelete(movie)}
                            className="btn btn-danger btn-sm">Delete
                    </button>
                </td>
            </tr>)}
            </tbody>
        </table>
    )
}

export default MoviesTable;