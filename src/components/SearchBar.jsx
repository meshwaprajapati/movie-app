import { useState } from "react";

function SearchBar({ fetchMovies }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const movieName = search.trim();

    if (!movieName) {
      alert("Please enter a movie name");
      return;
    }

    fetchMovies(movieName);
    setSearch("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;