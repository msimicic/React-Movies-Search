import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

function SearchResultsList({ setInput, setResults, setPickedMovie, results }) {
  return (
    <div className="results-list">
      {results.map((movie, index) => {
        return (
          <SearchResult
            key={index}
            result={movie}
            setPickedMovie={setPickedMovie}
            setResults={setResults}
            setInput={setInput}
          />
        );
      })}
    </div>
  );
}

export default SearchResultsList;
