import "./App.css";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResultsList from "./Components/SearchResultsList";
import MovieScreen from "./Components/MovieScreen";

function App() {
  const [results, setResults] = useState([]);
  const [pickedMovie, setPickedMovie] = useState();
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} input={input} setInput={setInput} />
        <SearchResultsList
          results={results}
          setPickedMovie={setPickedMovie}
          setResults={setResults}
          setInput={setInput}
        />
      </div>
      {pickedMovie && (
        <div className="movie-container">
          <MovieScreen pickedMovie={pickedMovie} />
        </div>
      )}
    </div>
  );
}

export default App;
