import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './componenets/Home';
import About from './componenets/About';
import Products from './componenets/Products';
import Product from './componenets/Product';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/:id' element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
