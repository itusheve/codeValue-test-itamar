import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ItemDetails() {
  const dispatch = useDispatch();
  const currentProductId = useSelector((state) => state.currentProductId);
  const productList = useSelector((state) => state.productList);
  const [currentProduct, setCurrentProduct] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName("");
    setDescription("");
    setPrice("");
  }, [currentProduct]);

  useEffect(() => {
    // setName((prevState) => prevState.currentProduct?.name);
    // setDescription((prevState) => prevState.currentProduct?.description);
    // setPrice((prevState) => prevState.currentProduct?.price);
    setCurrentProduct(
      productList?.filter((product) => product.id === currentProductId)[0]
    );
  }, [currentProductId]);

  return (
    <div className="flex flex-col justify-between p-4 items-start">
      <img src={currentProduct?.imgSrc} alt="" />
      <input
        onChange={(e) => setName(e.target.value)}
        className="text-3xl border p-3"
        placeholder={currentProduct?.name}
        value={name}
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        className="border p-3"
        placeholder={currentProduct?.description}
        value={description}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        className="border p-3"
        placeholder={currentProduct?.price}
        value={price}
      />
      <button
        onClick={() =>
          dispatch({
            type: "save-changes",
            payload: { name, description, price, currentProductId },
          })
        }
      >
        Save
      </button>
    </div>
  );
}

export default ItemDetails;
