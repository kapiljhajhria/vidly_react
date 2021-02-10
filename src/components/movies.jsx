import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination_component";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "",
    sortColumn: {
      path: "",
      order: "",
    },
  };

  componentDidMount() {
    const allGenres = [{ name: "All Genres", _id: "" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres: allGenres,
    });
  }

  handleDelete = (movie) => {
    const moviesArray = this.state.movies.filter((m) => m._id !== movie._id);
    // console.log(movie)
    this.setState({
      movies: moviesArray,
    });
  };
  handleLike = (movie) => {
    console.log("liked event occurred");
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(movie);
    console.log(index);
    console.log(movies[index].liked);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    // movies[index] = !movie.liked
    console.log(movies[index].liked);
    this.setState({
      movies,
    });
  };
  handlePageChange = (pageNo) => {
    console.log("page no is" + pageNo);
    this.setState({ currentPage: pageNo });
  };
  handleGenreChange = (genre) => {
    console.log("selected genre is " + genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
    // console.log(path);
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    //get selected genres and then paginate
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    //sort data now
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    //paginate data now
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const { history } = this.props;
    if (moviesCount === 0) return <p>There are no Movies in the database</p>;
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data } = this.getPageData();
    return (
      <div className={"container"} maxWidth="md">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreChange}
              // textProperty="name"
              // valueProperty="_id"
              selectedItem={this.state.selectedGenre}
            />
          </div>

          <div>
            <button
              className={"btn btn-primary m-2"}
              onClick={() => history.push("/movies/new")}
            >
              New Movie
            </button>
            <div className="col">
              <p>Showing {totalCount} movies in the database</p>
              <MoviesTable
                movies={data}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                onPageChange={this.handlePageChange}
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
