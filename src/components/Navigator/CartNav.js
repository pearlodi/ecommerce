import React from 'react';
import { NavLink } from 'react-router-dom';

const CartNav = () => {
  const activeStyle = {
    color: 'green',
    fontWeight: 900,
  };

  return (
    <div className='cart-pages'>
      <NavLink to="/cart" activeStyle={activeStyle}>
        <p className='cart-text'>Cart</p>
      </NavLink>
      <NavLink to="/checkout" activeStyle={activeStyle}>
        <p className='cart-text'>Checkout</p>
      </NavLink>
    </div>
  );
};

export default CartNav;
