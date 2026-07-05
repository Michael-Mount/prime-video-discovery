import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, onMovieSelect }) {
  if (movies.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">No movies found</h3>
        <p className="mt-2 text-gray-400">
          Try changing your search or selecting a different genre.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
    </div>
  );
}
