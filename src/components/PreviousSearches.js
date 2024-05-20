import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function PreviousSearches()
{
    const getInitialArray = (key) => {
        const savedArray = localStorage.getItem(key);
    
        return savedArray ? JSON.parse(savedArray) : [];
      };
    
      const [searchArray, setSearchArray] = useState(
        getInitialArray("searchArray")
      );
      const [inputValue, setInputValue] = useState("");
    
    
      // useEffect to update localStorage whenever myArray changes
      useEffect(() => {
        if(searchArray.length > 10)
        {
            localStorage.setItem('searchArray', JSON.stringify(searchArray.slice(-10)));  
        }
        else
        {
            localStorage.setItem("searchArray", JSON.stringify(searchArray));
        }
      }, [searchArray]);
    
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleBtnClick = () => {
        if(inputValue.trim() !== '')
            {
                setSearchArray([...searchArray, inputValue]);
            }
        setInputValue("");
      };
    
      const handleBtnClearSearch = () => { 
        setSearchArray([]);
        localStorage.setItem("searchArray", []);
    };
    
      // Function to render search items based on array length
      const renderSearchItems = (myArray) => {
        if (myArray.length <= 10) {
          return myArray.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ));
        } else {
          return myArray.slice(-10).map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ));
        }
      };
    
    
      return (
        <div>
          <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
              {renderSearchItems(searchArray)}
            </div>
            <div className="search-box">
              <input
                value={inputValue}
                onChange={handleChange}
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <button onClick={handleBtnClick} className="btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
      );
}



