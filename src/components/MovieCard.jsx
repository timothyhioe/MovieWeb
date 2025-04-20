import React from 'react';
import '../css/MovieCard.css'; // Import the CSS file for styling
import { useMovieContext } from '../context/MovieContext';

function MovieCard({ movie }) { // Accept the movie prop
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext(); // Import the context
    const favorite = isFavorite(movie.id); // Ensure this value updates when the context changes


    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p> {/* Display only the year of release */}
            </div>
        </div>
    );
};

export default MovieCard;