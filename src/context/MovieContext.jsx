import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {  // create a local storage to store the favorites
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, []) // when the component mounts, check if there are any favorites in local storage and set them to state

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites]) // whenever the favorites change, update the local storage

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // add the movie to the favorites array
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId)) // remove the movie from the favorites array
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId) // check if the movie is already in the favorites array
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    } 

    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
} // provide state to any of the componnents that are wrapped inside of it