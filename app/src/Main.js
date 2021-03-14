import React from "react";
import AddBtn from "./AddBtn";
import ItemDetails from "./ItemDetails";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import { useSelector } from "react-redux";

function Main() {
  const currentProductId = useSelector((state) => state.currentProductId);
  return (
    <div className="flex flex-col items-start p-10">
      <div className="flex justify-between mb-5 w-1/2">
        <AddBtn />
        <SearchBar />
        <SortBy />
      </div>
      <div className="justify-between flex">
        <ProductList />
        {currentProductId ? <ItemDetails /> : null}
      </div>
    </div>
  );
}

export default Main;
