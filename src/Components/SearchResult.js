import "./SearchResult.css";
import { Context } from "../App";
import { useContext } from "react";

function SearchResult({ result, index }) {
  const { setResults, setPickedMovie, setInput } = useContext(Context);

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
