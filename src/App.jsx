import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";

function Home({ onSearch }) {
  return (
    <div className="app">
      <h1>Movie App MMMM</h1>
      <SearchBar fetchMovies={onSearch} />
    </div>
  );
}

function Results({ movies, loading }) {
  return (
    <div className="app">
      <h1>Search Results 🎬</h1>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_KEY = "YOUR_API_KEY";

  const searchMovies = async (movieName) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`
      );

      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }

      navigate("/results"); 
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoading(true);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home onSearch={searchMovies} />} />
      <Route
        path="/results"
        element={<Results movies={movies} loading={loading} />}
      />
    </Routes>
  );
} 

export default App;