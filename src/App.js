import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Notfound from './components/Notfound';
import CartPage from './components/CartPage';
import { useSelector } from 'react-redux';

function App() {
  // const data = useSelector(state => state.cartReducer.carts)
  // console.log('app data',data)
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>

  );
}

export default App;
