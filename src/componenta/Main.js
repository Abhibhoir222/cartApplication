import { addToCart, emptyToCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productData } from "../redux/productReducer";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main componet ... from saga", data);
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyToCart())}>Empty from Cart</button>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name:{item.name}</div>
            <div>Colour:{item.color}</div>
            <div>Brand:{item.brand}</div>
            <div>price:{item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
            </div>
            <div>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
