import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import WatchlistSection from "./components/WatchlistSection";
import ContentRail from "./components/ContentRail";
import {
  ContentRailSkeleton,
  MovieGridSkeleton,
} from "./components/LoadingSkeleton";

import { movies } from "./data/movie";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("prime-discover-watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("prime-discover-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

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

  const trendingMovies = [...movies]
    .sort((a, b) => b.match - a.match)
    .slice(0, 6);

  const highMatchMovies = movies.filter((movie) => movie.match >= 88);

  const sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");

  const actionThrillerMovies = movies.filter(
    (movie) => movie.genre === "Action" || movie.genre === "Thriller",
  );

  function handleToggleWatchlist(movie) {
    setWatchlist((currentWatchlist) => {
      const isAlreadySaved = currentWatchlist.some(
        (watchlistMovie) => watchlistMovie.id === movie.id,
      );

      if (isAlreadySaved) {
        return currentWatchlist.filter(
          (watchlistMovie) => watchlistMovie.id !== movie.id,
        );
      }

      return [...currentWatchlist, movie];
    });
  }

  function handleRemoveFromWatchlist(movie) {
    setWatchlist((currentWatchlist) =>
      currentWatchlist.filter(
        (watchlistMovie) => watchlistMovie.id !== movie.id,
      ),
    );
  }

  const isSelectedMovieInWatchlist = selectedMovie
    ? watchlist.some((movie) => movie.id === selectedMovie.id)
    : false;

  return (
    <main id="top" className="min-h-screen bg-gray-950 text-white">
      <Header watchlistCount={watchlist.length} />
      <Hero
        movie={featuredMovie}
        isInWatchlist={
          featuredMovie
            ? watchlist.some((movie) => movie.id === featuredMovie.id)
            : false
        }
        onToggleWatchlist={handleToggleWatchlist}
        onMovieSelect={setSelectedMovie}
      />
      {isLoading ? (
        <>
          <ContentRailSkeleton title="Trending Now" />
          <ContentRailSkeleton title="High Match Picks" />
          <ContentRailSkeleton title="Sci-Fi Picks" />
          <ContentRailSkeleton title="Action & Thriller" />
        </>
      ) : (
        <>
          <ContentRail
            title="Trending Now"
            description="Popular picks based on strong match scores and featured discovery content."
            movies={trendingMovies}
            onMovieSelect={setSelectedMovie}
          />

          <ContentRail
            title="High Match Picks"
            description="Movies with the strongest match percentage for quick discovery."
            movies={highMatchMovies}
            onMovieSelect={setSelectedMovie}
          />

          <ContentRail
            title="Sci-Fi Picks"
            description="Futuristic stories, space exploration, and technology-driven worlds."
            movies={sciFiMovies}
            onMovieSelect={setSelectedMovie}
          />

          <ContentRail
            title="Action & Thriller"
            description="Fast-paced stories with tension, stakes, and momentum."
            movies={actionThrillerMovies}
            onMovieSelect={setSelectedMovie}
          />
        </>
      )}
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
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>

        <div className="mb-8">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        </div>

        {isLoading ? (
          <MovieGridSkeleton />
        ) : (
          <MovieGrid movies={filteredMovies} onMovieSelect={setSelectedMovie} />
        )}
      </section>

      <WatchlistSection
        watchlist={watchlist}
        onMovieSelect={setSelectedMovie}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          isInWatchlist={isSelectedMovieInWatchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
      )}
    </main>
  );
}
export default App;
