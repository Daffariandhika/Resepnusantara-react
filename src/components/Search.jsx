import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searches = ["gudeg", "nasi uduk"];

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
          <button className="btn" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
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
