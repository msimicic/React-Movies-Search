import "./App.css";
import { createContext, useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResultsList from "./Components/SearchResultsList";
import MovieScreen from "./Components/MovieScreen";

export const Context = createContext();

function App() {
  const [results, setResults] = useState([]);
  const [pickedMovie, setPickedMovie] = useState();
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="search-bar-container">
        <Context.Provider
          value={{
            results,
            setResults,
            pickedMovie,
            setPickedMovie,
            input,
            setInput,
          }}
        >
          <SearchBar />
          <SearchResultsList />
        </Context.Provider>
        {/* <SearchBar setResults={setResults} input={input} setInput={setInput} />
        <SearchResultsList
          results={results}
          setPickedMovie={setPickedMovie}
          setResults={setResults}>
          setInput={setInput}
        /> */}
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
