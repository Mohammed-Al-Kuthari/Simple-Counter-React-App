/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {deleteMovie, getMovies} from "../services/fakeMovieService";

class Movie extends Component {
    state = {
        movies: getMovies(),
    }

    deleteMovie = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() {
        if(!this.state.movies.length) return (
        <div className="alert alert-warning alert-dismissible fade show">
            <strong>Sorry!</strong> there are no movies in database
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>);
        return (
            <table className="table table-bordered text-md-center table-hover shadow-sm">
                <thead className="table-light">
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><a href="#" className="btn btn-danger" onClick={(e)=> {e.preventDefault(); this.deleteMovie(movie);} }>Delete</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Movie;