import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch('http://localhost:3500/products');
  data = yield data.json();
  console.log("action is called",data);
  yield put({ type: SET_PRODUCT_LIST, data:data });
}


function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
  result = yield result.json();
  console.log("action is called",result);
  yield put({ type: SET_PRODUCT_LIST, data:result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH,searchProduct)
}

export default productSaga;
