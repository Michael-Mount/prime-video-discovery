import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieGrid from "./components/MovieGrid";

import { movies } from "./data/movie";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const featuredMovie = movies.find((movie) => movie.featured);

  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white">
        <Header watchlistCount={0} />
        <Hero movie={featuredMovie} />
        <section id="movies" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find your next watch
              </h2>

              <p className="mt-3 max-w-2xl text-gray-400">
                Search by title or filter by genre to discover movies that match
                your mood.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </div>

          <div className="mb-8">
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreChange={setSelectedGenre}
            />
          </div>

          <MovieGrid movies={filteredMovies} />
        </section>
      </main>
    </>
  );
}

export default App;
