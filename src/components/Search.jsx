// Import necessary React components and FontAwesomeIcon search icon
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Define constants for previous searches
const PREVIOUS_SEARCHES_KEY = "previousSearches";
const MAX_PREVIOUS_SEARCHES = 5;

// Define a React component called PreviousSearches that takes in onSearch prop
export default function PreviousSearches({ onSearch }) {
  // Use the useState hook to define searchTerm and searches state variables
  const [searchTerm, setSearchTerm] = useState("");
  const [searches, setSearches] = useState([]);

  // Use the useEffect hook to load previous searches from local storage
  useEffect(() => {
    const previousSearches = localStorage.getItem(PREVIOUS_SEARCHES_KEY);
    if (previousSearches) {
      setSearches(JSON.parse(previousSearches));
    }
  }, []);

  // Define a function to handle the search form submission
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
    // Call the onSearch prop with the current search term
    onSearch(searchTerm);
  };

  // Define a function to handle changes to the search input field
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Render the search form and previous search terms
  return (
    <div className="previous-searches section">
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          {/* Bind searchTerm to the input field value and call handleInputChange when changed */}
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* Show the search icon when searchTerm is not empty and call handleSubmit when clicked */}
          {searchTerm.trim() !== "" && (
            <button className="btn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )}
        </div>
      </form>
      {/* Render a list of previous search terms */}
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
  )
}