import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function SearchBar({ input, setInput, setResults }) {
  const [listOfMovies, setListOfMovies] = useState([]);

  // useEffect(() => {
  //   Axios.get("https://imdb188.p.rapidapi.com/api/v1/getFanFavorites", {
  //     method: "GET",
  //     params: { country: "US" },
  //     headers: {
  //       "X-RapidAPI-Key": "2cdaf41bd8mshed21ee02ab5bc12p113beejsne67845e36d90",
  //       "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
  //     },
  //   })
  //     .then((response) => {
  //       setListOfMovies(response.data.data.list);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://imdb188.p.rapidapi.com/api/v1/getFanFavorites",
          {
            method: "GET",
            params: { country: "US" },
            headers: {
              "X-RapidAPI-Key":
                "2cdaf41bd8mshed21ee02ab5bc12p113beejsne67845e36d90",
              "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
            },
          }
        );

        setListOfMovies(response.data.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filterData = (searchTerm) => {
    const results = listOfMovies.filter((movie) => {
      return (
        searchTerm &&
        movie &&
        movie.titleText.text &&
        movie.titleText.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setResults(results);
  };

  const handleChange = (searchTerm) => {
    setInput(searchTerm);
    filterData(searchTerm);
  };

  return (
    <div className="search-bar">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleChange(e.target.value)}
        value={input}
      />
    </div>
  );
}

export default SearchBar;
