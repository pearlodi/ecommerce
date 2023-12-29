import './assets/css/main.css'
import './App.css';
// import Header from './components/Header';
// import Product from './views/Product';
// import { Provider } from 'react-redux';
import Store from './Store';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Index from './views/Index';
import { Provider } from 'react-redux';
import Product from './views/Product';
import Cart from './views/Cart';
import UserDetails from './components/UserDetails';
import Checkout from './components/Checkout';
import CartNav from './components/CartNav';


import AOS from 'aos';

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether animations should only occur once when an element first enters the viewport
});

function App() {
  return (
     <Router>
   <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartNav" element={<CartNav />} />
      </Routes>
   </Provider>

  </Router>
  );
}

export default App;
