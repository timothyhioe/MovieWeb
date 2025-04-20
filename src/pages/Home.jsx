import MovieCard from "../components/MovieCard"
import {useState} from "react"
import '../css/Home.css'; // Import the CSS file for styling

function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id : 1, title : "Adit dan Sopo Jarwo", release_date: "2020"},
        {id : 2, title : "Jumbo", release_date: "2024"},
        {id : 3, title : "Oppenheimer", release_date: "2023"},
    ];

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)
        alert(searchQuery);
        setSearchQuery(""); // Clear the search input after submission
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

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
        </div>
    );
}
export default Home