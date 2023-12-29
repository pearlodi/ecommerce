import './assets/css/main.css'
import './assets/css/Footer.css'
import './App.css';
import Store from './Store';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Index from './views/Index';
import { Provider } from 'react-redux';
import Product from './views/Product';
import Cart from './views/Cart';
import UserDetails from './components/View/UserDetails';
import Checkout from './components/View/Checkout';
import CartNav from './components/Navigator/CartNav';
import WishList from './views/WishList';
import { useEffect } from "react";





function App() {
  useEffect(() => {
    document.title = 'Pearlline';
    return () => {
      document.title = 'Pearlline'; 
    };
  }, []);
  return (
     <Router basename={process.env.PUBLIC_URL}>
   <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartNav" element={<CartNav />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
   </Provider>

  </Router>
  );
}

export default App;
