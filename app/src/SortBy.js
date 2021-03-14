import React from "react";

function SortBy() {
  return (
    <div className="flex items-center">
      <h3 className="mr-2 text-lg">Sort by</h3>
      <select name="cars" id="cars">
        <option value="volvo">Name</option>
      </select>
    </div>
  );
}

export default SortBy;
