import { useState } from "react";

export default function Header({ watchlistCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-white transition hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Prime<span className="text-sky-400">Discover</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          <a
            href="#movies"
            className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Movies
          </a>

          <a
            href="#genres"
            className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Genres
          </a>

          <a
            href="#watchlist"
            className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Watchlist
          </a>
        </nav>

        {/* Desktop watchlist link */}
        <div className="hidden md:block">
          <a
            href="#watchlist"
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Watchlist
            <span className="ml-2 rounded-full bg-sky-400 px-2 py-0.5 text-xs font-bold text-gray-950">
              {watchlistCount}
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-gray-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-950 md:hidden"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-gray-950 px-6 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <a
              href="#movies"
              className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </a>

            <a
              href="#genres"
              className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Genres
            </a>

            <a
              href="#watchlist"
              className="text-sm font-medium text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Watchlist
            </a>

            <a
              href="#watchlist"
              className="mt-2 inline-flex w-full justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Watchlist
              <span className="ml-2 rounded-full bg-sky-400 px-2 py-0.5 text-xs font-bold text-gray-950">
                {watchlistCount}
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
