export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full">
      <label htmlFor="movie-serch" className="sr-only">
        Search Movies
      </label>
      <input
        id="movie-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search Movies..."
        className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-sky-400 focus:bg-white/15 focus:ring-2 focus:ring-sky-400"
      />
    </div>
  );
}
