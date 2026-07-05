export default function WatchlistSection({
  watchlist,
  onMovieSelect,
  onRemoveFromWatchlist,
}) {
  return (
    <section
      id="watchlist"
      className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:px-8"
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Saved
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Watchlist
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Keep track of movies you want to come back to later.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          {watchlist.length} {watchlist.length === 1 ? "movie" : "movies"} saved
        </p>
      </div>

      {watchlist.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Your watchlist is empty
          </h3>

          <p className="mx-auto mt-2 max-w-md text-gray-400">
            Open a movie detail modal and add something to your watchlist. Saved
            movies will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {watchlist.map((movie) => (
            <article
              key={movie.id}
              className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
            >
              <button
                type="button"
                onClick={() => onMovieSelect(movie)}
                className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label={`View details for ${movie.title}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={`${movie.title} preview`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </button>

              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{movie.title}</h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {movie.genre} • {movie.year} • {movie.duration}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-green-400">
                    {movie.match}%
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onMovieSelect(movie)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => onRemoveFromWatchlist(movie)}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500/20 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-950"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
