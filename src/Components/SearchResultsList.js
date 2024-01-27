import SearchResult from "./SearchResult";
import "./SearchResultsList.css";
import { Context } from "../App";
import { useContext } from "react";

function SearchResultsList() {
  const { results } = useContext(Context);

  return (
    <div className="results-list">
      {results.map((movie, index) => {
        return <SearchResult key={index} result={movie} />;
      })}
    </div>
  );
}

export default SearchResultsList;
