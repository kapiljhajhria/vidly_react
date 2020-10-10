import React from "react";
import LikeComponent from "./common/like_component";

function MoviesTable(props) {
    const {onLike,onDelete,movies}=props;
    return (
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