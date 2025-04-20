import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import '../css/Home.css'; // Import the CSS file for styling
import {getPopularMovies, searchMovies} from "../services/api"; // Import the searchMovies function

function Home () {
    const [searchQuery, setSearchQuery] = useState(""); // State to store the search query entered by the user
    const [movies, setMovies] = useState([]); // State to store the list of movies
    const [error, setError] = useState(null); // State to store any error that occurs during the API call
    const [loading, setLoading] = useState(true); // State to indicate if the data is still loading

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)
        if(!searchQuery.trim()) return; // If the search query is empty, do nothing
        if(loading) return; // If already loading, do nothing
        
        setLoading(true); // Set loading to true while fetching data

        try{
            const searchResults = await searchMovies(searchQuery); // Call the searchMovies function with the search query
            setMovies(searchResults); // Update the movies state with the search results
            setError(null); // Clear any previous error messages
        }catch(err){
            console.log(err);
            setError("Failed to search movies...")
        }finally{
            setLoading(false) // Set loading to false after fetching data
        }
    };

    return (
        <div className = "home">
            <form onSubmit={handleSearch} className ="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>} {/* Display error message if any */}

            {loading ? <div className="loading">Loading...</div> : (

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
            )}
        </div>
    );
}
export default Home