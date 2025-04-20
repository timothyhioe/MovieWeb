import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"; // Import the context
import MovieCard from "../components/MovieCard"; // Import the MovieCard component

function Favorites() {
    const { favorites } = useMovieContext(); // Get the favorites from the context

    if(favorites){
        return (
            <div className="Favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            </div>
           
        )
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding your favorite movies!</p>
    </div>
}

export default Favorites