export default function MovieCard({ movie }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 focus-within:ring-2 focus-within:ring-sky-400">
      <button type="button" className="block w-full text-left">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={movie.image}
            alt={`${movie.title} poster`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-white">{movie.title}</h3>

            <span className="shrink-0 text-sm font-semibold text-green-400">
              {movie.match}%
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.rating}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <p className="mt-2 text-sm text-sky-300">{movie.genre}</p>
        </div>
      </button>
    </article>
  );
}
