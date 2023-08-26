import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar({ onSearch }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleSearchButton = () => {
    onSearch({
      filterType: selectedFilter,
      filterValue: selectedValue,
    });
  };

  return (
    <>
    <div className="searchBar">
      <div>
        <button onClick={() => setSelectedFilter("title")}>Search by Title</button>
        {selectedFilter === "title" && (
         <input
         type="text"
         value={selectedValue}
         onChange={(e) => setSelectedValue(e.target.value)}
         placeholder="Enter Title"
       />
        )}
      </div>
      <div>
        <button onClick={() => setSelectedFilter("type")}>Search by Type</button>
        {selectedFilter === "type" && (
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
          </select>
        )}
      </div>
      <div>
        <button onClick={() => setSelectedFilter("status")}>Show Status</button>
        {selectedFilter === "status" && (
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="REJECTED">Rejected</option>
            <option value="PENDING">Pending</option>
          </select>
        )}
      </div>
      
      <button onClick={handleSearchButton}>Apply Filters</button>
    </div>
    </>
  );
}

export default SearchBar;
