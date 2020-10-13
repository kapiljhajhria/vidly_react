import React from "react";

export default function MovieForm({match, history}) {
    return (
        <div>
            <h1>Movie Id: {match.params.id}</h1>
            <button
                onClick={() => history.push("/movies")}
                className="btn btn-primary">
                Save
            </button>
        </div>
    )
}