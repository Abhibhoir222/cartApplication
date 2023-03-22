import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action call addTocart", data);
  return {
    type: ADD_TO_CART,
    data
  };
};

export const removeToCart = (data) => {
    console.log("action call removeToCart", data);
    return {
      type: REMOVE_TO_CART,
      data
    };
  };

  export const emptyToCart = () => {
    console.log("action call emptyToCart");
    return {
      type: EMPTY_CART,
    };
  };