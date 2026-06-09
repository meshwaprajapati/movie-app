import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (!movies.length) {
    return <h3>No movies found</h3>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;