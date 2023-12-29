import React from 'react'
import  '../assets/css/header.css'
import logo from '../assets/img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const cart = useSelector((state) => state.cart.cart)
  const navigate = useNavigate();
  const navigateToCart = () =>{
    navigate("/cart")

  }
  return (
    <div className='header'>
      {/* <div className='header-view'>
        <div className='header-logo'>
        <img src={logo} alt='logo' className='logo'/>
        </div>
        <div className='header-input'> 
          <input type='text' placeholder='seach items or products' className='header--input'/>
          <SearchIcon />
        </div>
        <div>
          <p>Hello user</p>
          <p>Accounts and Lists</p>
        </div>
        <div>
          <p>Returns</p>
          <p>Orders</p>
        </div>
        <div className='cart'>
          <div className='shopping-cart' onClick={navigateToCart}>
          <ShoppingCartIcon />
          </div>
          <h1 className='cart-count'>{cart.length}</h1>
        </div>
        <div>
          <p>Nigeria</p>
          <p>+234 9037248116</p>
        </div>
      </div> */}
      <div className='header-list'>
      <ul className='header-list-ul'>
        {/* <li className='header-list-li'> Buy </li>
        <li className='header-list-li'> Healthy Products </li>
        <li className='header-list-li'> Sell </li>
        <li className='header-list-li'> Baby </li>
        <li className='header-list-li'> Health and Lifestyle </li>
        <li className='header-list-li'> Prime Video </li>
        <li className='header-list-li'> Super Sale </li>
        <li className='header-list-li'> Subscribe </li> */}
        <div className='cart'>
          <div className='shopping-cart' onClick={navigateToCart}>
          <ShoppingCartIcon />
          </div>
          <h1 className='cart-count'>{cart.length}</h1>
        </div>
      </ul>
      
      </div>


    </div>
  )
}

export default Header