import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=>prev+next)
  return (
    <div className="App">
      <Link to="/">Product List</Link>
      <h1>Cart page</h1>
      <div className="cart-page-container" >
        <table>
        <tr>
            <td>Name</td>
            <td>color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
        </tr>    
        {
            cartData.map((item)=><tr key={item.id} >
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
            <td>{item.category}</td>
        </tr>)
        }
          </table>
          <div className="price-details" >
            <div className="adjust-price" ><span>amount</span><span>{amount}</span></div>
            <div className="adjust-price" ><span>discounr</span><span>{amount/10}</span></div>
            <div className="adjust-price"><span>total</span><span>000</span></div>
            <div className="adjust-price"><span>tax</span><span>{amount-(amount/10)}</span></div>

          </div>
      </div>
    </div>
  );
}

export default Cart;
