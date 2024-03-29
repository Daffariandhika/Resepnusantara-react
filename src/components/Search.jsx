import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PREVIOUS_SEARCHES_KEY = "previousSearches";
const MAX_PREVIOUS_SEARCHES = 5;

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

  const handleClearSearches = () => {
    setSearches([]);
    localStorage.removeItem(PREVIOUS_SEARCHES_KEY);
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
      <h2>Pencarian Sebelumnya</h2>
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
        {searches.length > 0 && (
          <button className="btn-clear" onClick={handleClearSearches}>
            <FontAwesomeIcon icon={faTrashCan} bounce/>
          </button>
        )}
      </div>
    </div>
  )
}