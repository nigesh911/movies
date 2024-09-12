import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // TMDB API URL and your API key
  const API_KEY = "599868b57ef4c6b8249ca92e6e9bda58";  // Make sure to replace this with your actual TMDB API key
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    // Fetch movies when the component mounts
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        setError("Failed to fetch movies.");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {error && <p>{error}</p>}
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "150px" }}
              />
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
