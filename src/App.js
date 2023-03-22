import "./App.css";
import Header from "./componenta/Header";
import Main from "./componenta/Main";
import {Route,Routes} from 'react-router-dom'
import Cart from "./componenta/Cart";

function App() {

  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </div>
  );
}

export default App;
