import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function ProductList() {
  const productList = useSelector((state) => state.productList);
  return (
    <div className="mr-10">
      {productList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
