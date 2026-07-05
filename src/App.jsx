import "./App.css";
import Hero from "./components/Hero";
import { movies } from "./data/movie";

function App() {
  const featuredMovie = movies.find((movie) => movie.featured);
  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white">
        <Hero movie={featuredMovie} />
      </main>
    </>
  );
}

export default App;
