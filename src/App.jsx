import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";

function Home({ onSearch }) {
  return (
    <div className="app">
      <h1>Movie App 🎬</h1>
      <SearchBar fetchMovies={onSearch} />
    </div>
  );
}

function Results({ movies, loading }) {
  return (
    <div className="app">
      <h1>Search Results 🎬</h1>

      {loading ? (
        <Loader />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const searchMovies = async (movieName) => {
    setLoading(true);

    try {
      // Loading effect dekhne ke liye
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dummyMovies = [
        {
          imdbID: "1",
          Title: "Shiddat",
          Year: "2021",
          Poster:
            "https://via.placeholder.com/200x300?text=Shiddat",
        },
        {
          imdbID: "2",
          Title: "3 Idiots",
          Year: "2009",
          Poster:
            "https://via.placeholder.com/200x300?text=3+Idiots",
        },
        {
          imdbID: "3",
          Title: "Dangal",
          Year: "2016",
          Poster:
            "https://via.placeholder.com/200x300?text=Dangal",
        },
        {
          imdbID: "4",
          Title: "Pathaan",
          Year: "2023",
          Poster:
            "https://via.placeholder.com/200x300?text=Pathaan",
        },
        {
          imdbID: "5",
          Title: "Jawan",
          Year: "2023",
          Poster:
            "https://via.placeholder.com/200x300?text=Jawan",
        },
        {
          imdbID: "6",
          Title: "Dhurandar",
          Year: "2026",
          Poster: 
            "https://via.placeholder.com/200x300?text=Dhurandar",
        },
      ];

      const filteredMovies = dummyMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(movieName.toLowerCase())
      );

      setMovies(filteredMovies);

      navigate("/results");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home onSearch={searchMovies} />}
      />

      <Route
        path="/results"
        element={
          <Results
            movies={movies}
            loading={loading}
          />
        }
      />
    </Routes>
  );
}

export default App;