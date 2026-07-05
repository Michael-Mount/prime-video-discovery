# PrimeDiscover — Streaming Discovery Prototype

PrimeDiscover is a responsive streaming discovery prototype inspired by modern video platforms. The app allows users to browse featured content, search and filter movies, open detail modals, save movies to a watchlist, and view recently watched titles.

This project was built to practice frontend development, UI design, component architecture, responsive layouts, accessibility, and interactive React state management.

---

## Project Overview

The goal of this project was to build a polished movie discovery experience that feels similar to a real streaming platform. Instead of focusing only on a static layout, the app includes interactive features such as searching, filtering, modal previews, watchlist persistence, loading skeletons, and recently watched content.

This project helped me practice how to think through both the technical and design side of a frontend application:

- How should users discover content?
- How should content be organized visually?
- How should state be shared across multiple components?
- How should the interface respond to user actions?
- How can the app remain usable across desktop and mobile screens?

---

## Features

### Core Features

- Featured hero section
- Responsive navigation header
- Search bar for finding movies by title
- Genre filter buttons
- Responsive movie grid
- Movie detail modal
- Add/remove from watchlist
- Persistent watchlist using `localStorage`
- Watchlist section
- Recently watched row
- Horizontal content rails
- Loading skeleton UI
- Hover and focus states
- Mobile-friendly layout
- Smooth scrolling
- Basic accessibility improvements

### Interactive Behavior

Users can:

- Browse featured and categorized movies
- Search for a movie by title
- Filter movies by genre
- Click a movie card to open a detail modal
- Add or remove movies from their watchlist
- View saved movies in the Watchlist section
- Reopen movie details from the Watchlist section
- See recently opened movies in the Recently Watched row
- Refresh the page without losing watchlist or recently watched data

---

## Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- CSS animations
- Vite
- LocalStorage

---

## Why I Built This

I built this project to strengthen my frontend development and UI design skills. A streaming discovery interface is a useful project because it combines visual design, reusable components, user interaction, state management, and responsive layout work.

This project is especially useful for technical interviews because it demonstrates:

- Component-based architecture
- React state management
- Passing props between parent and child components
- Controlled inputs
- Derived state
- Conditional rendering
- Reusable UI components
- Data-driven rendering
- Responsive design
- Accessibility considerations
- UI polish and interaction states

---

## Design Goals

The design goal was to create a dark, cinematic interface that supports fast content discovery.

The layout was designed around two types of user behavior:

1. Browsing casually through horizontal content rails
2. Searching or filtering when the user knows what they want

The hero section gives the app a strong visual entry point, while the search, filters, rails, grid, and watchlist give users multiple ways to interact with the content.

---

## Key Design Decisions

### Cinematic Hero Section

The hero section uses a large background image, layered gradients, metadata, and primary actions. The gradients improve readability while keeping the visual style immersive.

### Horizontal Content Rails

Streaming platforms often use horizontal rows because they support casual browsing. I created a reusable `ContentRail` component so different movie groups could share the same layout.

Examples include:

- Trending Now
- High Match Picks
- Sci-Fi Picks
- Action & Thriller
- Recently Watched

### Search and Genre Filtering

The app includes both search and genre filtering because users discover content in different ways. Some users search directly by title, while others browse by category or mood.

### Watchlist Persistence

The watchlist is saved to `localStorage`, so users do not lose saved movies after refreshing the page.

### Recently Watched

The Recently Watched row tracks movies the user has opened. This mimics a common streaming-platform pattern and gives users a quick way to return to content they recently viewed.

### Loading Skeleton

The loading skeleton simulates the experience of waiting for data from an API. Even though the current movie data is local, the skeleton UI makes the app feel more realistic and production-like.

---

## Component Structure

```txt
src/
  components/
    Header.jsx
    Hero.jsx
    SearchBar.jsx
    GenreFilter.jsx
    MovieGrid.jsx
    MovieCard.jsx
    MovieModal.jsx
    WatchlistSection.jsx
    ContentRail.jsx
    LoadingSkeleton.jsx
  data/
    movies.js
  App.jsx
  index.css
  main.jsx
```

---

## Main Components

### `Header.jsx`

The header includes the app branding, desktop navigation, mobile navigation, and watchlist count. The watchlist count is passed in as a prop from the parent app state.

### `Hero.jsx`

The hero displays the featured movie and allows users to view details or add/remove the featured movie from the watchlist.

### `SearchBar.jsx`

The search bar is a controlled input. The search value is stored in the parent component so it can be used to filter the movie data.

### `GenreFilter.jsx`

The genre filter renders buttons dynamically based on the available movie genres. The selected genre is stored in state and used to filter the grid.

### `MovieGrid.jsx`

The movie grid displays filtered movie results in a responsive layout. It also shows an empty state when no movies match the current search or genre filter.

### `MovieCard.jsx`

Each movie card displays a title, image, match score, year, rating, duration, and genre. Clicking a card opens the movie detail modal.

### `MovieModal.jsx`

The modal shows a larger preview of the selected movie, description, metadata, and watchlist controls. It can be closed by clicking the close button, clicking the backdrop, or pressing the Escape key.

### `WatchlistSection.jsx`

The Watchlist section displays movies the user saved. Users can remove items or reopen the movie detail modal from this section.

### `ContentRail.jsx`

The content rail is a reusable horizontal scrolling row used for categories like Trending Now, Sci-Fi Picks, and Recently Watched.

### `LoadingSkeleton.jsx`

The loading skeleton components create placeholder cards that match the size and layout of the final movie cards.

---

## State Management

The main state lives in `App.jsx`.

```js
const [searchTerm, setSearchTerm] = useState("");
const [selectedGenre, setSelectedGenre] = useState("All");
const [selectedMovie, setSelectedMovie] = useState(null);
const [watchlist, setWatchlist] = useState([]);
const [recentlyWatched, setRecentlyWatched] = useState([]);
const [isLoading, setIsLoading] = useState(true);
```

The app uses lifted state so multiple components can share the same data.

For example, the watchlist state is used by:

- Header
- Hero
- MovieModal
- WatchlistSection

This keeps the UI synchronized and avoids duplicated state.

---

## Important React Concepts Used

### Props

Props are used to pass data and event handlers from parent components to child components.

```jsx
<Hero
  movie={featuredMovie}
  isInWatchlist={isFeaturedMovieInWatchlist}
  onToggleWatchlist={handleToggleWatchlist}
  onMovieSelect={handleMovieSelect}
/>
```

### Controlled Inputs

The search bar is controlled by React state.

```jsx
<input
  value={searchTerm}
  onChange={(event) => onSearchChange(event.target.value)}
/>
```

### Derived State

The filtered movie list is calculated from the original movie data, search term, and selected genre.

```js
const filteredMovies = movies.filter((movie) => {
  const matchesSearch = movie.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;

  return matchesSearch && matchesGenre;
});
```

### Conditional Rendering

The app conditionally renders modals, skeletons, empty states, and recently watched content.

```jsx
{
  selectedMovie && (
    <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
  );
}
```

### LocalStorage

The watchlist and recently watched movies are saved to `localStorage`.

```js
useEffect(() => {
  localStorage.setItem("prime-discover-watchlist", JSON.stringify(watchlist));
}, [watchlist]);
```

---

## Accessibility Considerations

This project includes several accessibility improvements:

- Semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `button`
- Focus states for interactive elements
- `aria-label` attributes for movie cards
- `aria-expanded` and `aria-controls` for the mobile menu
- `role="dialog"` and `aria-modal="true"` for the movie modal
- Escape key support for closing the modal
- Empty `alt` text for decorative hero imagery
- Descriptive `alt` text for movie cards and modal images
- Reduced motion support for loading skeleton animation

---

## Responsive Design

The app is designed to work across mobile, tablet, and desktop screens.

Responsive techniques used:

- Mobile-first Tailwind classes
- Flexible grid columns
- Horizontally scrollable content rails
- Stacked buttons on smaller screens
- Collapsible mobile navigation
- Fluid spacing and max-width containers

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Michael-Mount/prime-video-discovery.git
```

Navigate into the project:

```bash
cd prime-discover
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL in your browser.

---

## Available Scripts

Start the development server:

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Future Improvements

Possible future improvements include:

- Add real movie data from an API
- Add user authentication
- Add a full watchlist page
- Add sorting controls
- Add recommendation logic based on selected genres
- Add keyboard arrow navigation for content rails
- Add Framer Motion page and modal transitions
- Add unit tests with React Testing Library
- Add end-to-end tests with Playwright
- Add movie trailer previews
- Add user ratings
- Add dark/light theme toggle
- Improve modal focus trapping

---

## What I Learned

While building this project, I practiced:

- Structuring a React app with reusable components
- Passing props and event handlers between components
- Managing shared state in a parent component
- Using `localStorage` for persistence
- Creating responsive layouts with Tailwind CSS
- Designing hover, focus, loading, empty, and active states
- Building a modal with keyboard support
- Thinking through product and UX decisions
- Creating a realistic interface from static data

---

## Interview Talking Points

This project gives me several strong points to discuss in interviews:

- I used a component-based architecture to keep the UI reusable and maintainable.
- I lifted shared state into `App.jsx` so the Header, Hero, Modal, and Watchlist could stay synchronized.
- I used derived state for filtering instead of storing a separate filtered list.
- I added loading skeletons to simulate a real API-driven experience.
- I used `localStorage` to persist watchlist and recently watched data.
- I considered accessibility by adding focus states, semantic HTML, modal attributes, and Escape key behavior.
- I designed the UI around content discovery, using both browsing rails and direct search/filter controls.

---

## Disclaimer

This is a conceptual streaming discovery prototype built for educational and portfolio purposes. It is not affiliated with Amazon Prime Video or any other streaming service. All movie titles, descriptions, and data are fictional.
