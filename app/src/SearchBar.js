import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="flex items-center py-2 px-4 border rounded">
      <AiOutlineSearch />
      <input type="text" className="focus:outline-none ml-2" />
    </div>
  );
}

export default SearchBar;
