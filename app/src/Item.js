import React from "react";
import DeleteBtn from "./DeleteBtn";
import { useDispatch } from "react-redux";

function Item({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch({ type: "show-product", payload: product.id });
      }}
      className="flex w-full h-40 border-2 border-black mb-3 p-4 justify-between"
    >
      <div class="h-full">
        <img
          class="h-full object-cover"
          src={product.imgSrc}
          alt="Macbook pro 13"
        />
      </div>
      <div class="flex flex-col items-start">
        <h2 class="text-2xl">{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div className="self-end">
        <DeleteBtn
          onClick={() =>
            dispatch({ type: "delete-product", payload: product.id })
          }
        />
      </div>
    </button>
  );
}

export default Item;
