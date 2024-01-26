import "./SearchResult.css";

function SearchResult({ setInput, setResults, setPickedMovie, result, index }) {
  return (
    <div
      className="search-result"
      key={index}
      onClick={() => {
        setPickedMovie(result);
        setResults([]);
        setInput("");
      }}
    >
      {result.titleText.text}
    </div>
  );
}

export default SearchResult;
