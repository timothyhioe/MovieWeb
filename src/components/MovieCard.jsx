import React from 'react';
import '../css/MovieCard.css'; // Import the CSS file for styling

const MovieCard = ({ movie }) => { // Accept the movie prop

    function onFavClick() {
        alert("clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={onFavClick}>
                        ♥
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;