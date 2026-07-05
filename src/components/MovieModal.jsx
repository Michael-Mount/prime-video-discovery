import { useEffect } from "react";

export default function MovieModal({
  movie,
  onClose,
  isInWatchlist,
  onToggleWatchlist,
}) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-gray-950 shadow-2xl ring-1 ring-white/10 sm:rounded-3xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={movie.image}
            alt={`${movie.title} preview`}
            className="h-72 w-full object-cover sm:h-96"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Close
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {movie.genre}
          </p>

          <h2
            id="movie-modal-title"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {movie.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            <span className="font-semibold text-green-400">
              {movie.match}% Match
            </span>
            <span>{movie.year}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            {movie.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-white px-6 py-3 font-semibold text-gray-950 transition hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Play Preview
            </button>

            <button
              type="button"
              onClick={() => onToggleWatchlist(movie)}
              className={`rounded-full px-6 py-3 font-semibold transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                isInWatchlist
                  ? "bg-sky-400 text-gray-950 hover:bg-sky-300"
                  : "border border-white/30 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
