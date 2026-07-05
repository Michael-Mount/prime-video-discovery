export default function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <div id="genres" className="flex flex-wrap gap-3">
      {genres.map((genre) => {
        const isActive = selectedGenre === genre;

        return (
          <button
            key={genre}
            type="button"
            onClick={() => onGenreChange(genre)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950 ${
              isActive
                ? "bg-sky-400 text-gray-950"
                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
