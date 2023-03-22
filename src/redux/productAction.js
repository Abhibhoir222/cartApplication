import { PRODUCT_LIST, PRODUCT_SEARCH} from "../redux/constant";

export const productList = () => {
  // let data = "hello, How are you?"
  return {
    type: PRODUCT_LIST,
    // data:"apple"
  };
};

export const productSearch = (query) => {
  // let data = "hello, How are you?"
  return {
    type: PRODUCT_SEARCH,
    // data:"apple"
    query,
  };
};
