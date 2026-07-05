export default function Hero({ movie }) {
  if (!movie) return null;

  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={movie.image} alt="" className="h-full w-full object-cover" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Left-to-right Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/80 to-transparent" />
        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-gray-950 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex min-h-[72vh] items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Featured
          </p>
          <h1 className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            {movie.title}
          </h1>
          <div className="font-semibold text-green-400 flex flex-col gap-3">
            <span>{movie.match}% Match</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="rounded-full border border-white/20 w-20 px-3 py-1">
              {movie.genre}
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
            {movie.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-gray-950 transition hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950">
              Play Preview
            </button>
            <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
