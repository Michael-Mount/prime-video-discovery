export default function ContentRail({
  title,
  description,
  movies,
  onMovieSelect,
}) {
  if (movies.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>

          {description && (
            <p className="mt-2 max-w-2xl text-sm text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>

      <div
        className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4"
        aria-label={title}
      >
        {movies.map((movie) => (
          <article
            key={`${title}-${movie.id}`}
            className="group w-64 shrink-0 snap-start overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 focus-within:ring-2 focus-within:ring-sky-400 sm:w-72"
          >
            <button
              type="button"
              onClick={() => onMovieSelect(movie)}
              aria-label={`View details for ${movie.title}`}
              className="block w-full text-left"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{movie.title}</h3>

                  <span className="shrink-0 text-sm font-semibold text-green-400">
                    {movie.match}%
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <span>{movie.genre}</span>
                  <span>•</span>
                  <span>{movie.year}</span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
