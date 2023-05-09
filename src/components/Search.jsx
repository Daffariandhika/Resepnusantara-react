import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PREVIOUS_SEARCHES_KEY = "previousSearches";
const MAX_PREVIOUS_SEARCHES = 10;

export default function PreviousSearches({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const previousSearches = localStorage.getItem(PREVIOUS_SEARCHES_KEY);
    if (previousSearches) {
      setSearches(JSON.parse(previousSearches));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      return;
    }
    setSearches((prevSearches) => {
      if (!prevSearches.includes(searchTerm.toLowerCase())) {
        const newSearches = [...prevSearches, searchTerm.toLowerCase()];
        if (newSearches.length > MAX_PREVIOUS_SEARCHES) {
          newSearches.shift();
        }
        localStorage.setItem(
          PREVIOUS_SEARCHES_KEY,
          JSON.stringify(newSearches)
        );
        return newSearches;
      }
      return prevSearches;
    });
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="previous-searches section">
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm.trim() !== "" && (
            <button className="btn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )}
        </div>
      </form>
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <button
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => onSearch(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}

