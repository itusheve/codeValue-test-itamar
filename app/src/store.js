import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
const initialState = {
  productList: [
    {
      id: uuidv4(),
      name: "Macbook Pro 13 inch",
      description: "The best experience in small package",
      price: "1200$",
      creationDate: moment().format("MMM Do YY"),
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Apple_EYE_2020/11-11-2020/AMZ_FamilyStripe_MacBook_Pro_13_inch_M1._CB415366413_.png",
    },
    {
      id: uuidv4(),
      name: "iPad Pro 12 inch",
      description: "The best experience in small package",
      price: "1000$",
      creationDate: moment().format("MMM Do YY"),
    },
  ],
  currentProductId: null,
};

const deleteProduct = (state, id) => {
  const productList = state.productList.filter(
    (product) => !(product.id === id)
  );
  return { ...state, productList: productList };
};

const showProduct = (state, id) => {
  return { ...state, currentProductId: id };
};

const saveChanges = (state, changesObj) => {
  const newList = state.productList.map((product) => {
    if (product.id === changesObj.currentProductId) {
      return {
        ...product,
        name: changesObj.name,
        description: changesObj.description,
        price: changesObj.price,
      };
    }
    return { ...product };
  });
  return {
    ...state,
    productList: newList,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "delete-product":
      return deleteProduct(state, action.payload);
    case "show-product":
      return showProduct(state, action.payload);
    case "save-changes":
      return saveChanges(state, action.payload);
    default:
      return { ...state };
  }
};

const store = createStore(rootReducer);

export default store;
