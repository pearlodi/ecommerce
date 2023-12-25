import React from 'react';
import '../assets/css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity, removeFromCart, initializeCart } from '../redux/CartSlice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TransitionsModal from '../components/ModalForm';
import CartNav from '../components/CartNav';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {
  // const [items, setItems] = useState({ quantity: 1 });

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const removeQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  
  // const addQuantity = (item) => {
  //   setItem({ ...item, quantity: item.quantity + 1 });
  // };

  // const removeQuantity = (item) => {
  //   if (item.quantity > 1) {
  //     setItem({ ...item, quantity: item.quantity - 1 });
  //   }
  // };

console.log(removeQuantity)
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div className='state'>
          <img src='https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png' alt='' width={550}/>
          <p className='empty-message'>Your cart is empty</p>
<NavLink to="/product">

          <p className='empty'>get more items</p>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
  <CartNav/>
      <div className='cart-page'>
     
        {/* <div>
          {cart.map((item, index) => (
            <div className='cart--items' key={index}>
              <div className='cart-image'>
                <img src={item.image} alt={item.title} className='cart--image' />
                <div className='remove-item' onClick={() => removeItem(item)}>
                  <RemoveCircleOutlineIcon />
                  Remove
                </div>
              </div>

              <div className='cart-item-details'>
                <h1 className='cart--title'>{item.title}</h1>
                <p className='cart--description'> {item.description}</p>
                <p className='cart--price'>${item.price}</p>
                <p className='cart--price'>
                  <strong>Total: </strong>${item.price * cart.length}
                </p>

                <div className='cart-controls'>
                  <button onClick={() => removeQuantity(item)} className='cart-btn'>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => addQuantity(item)} className='cart-btn'>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">IMAGE&nbsp;</TableCell>

            <TableCell>TITLE</TableCell>

            {/* <TableCell align="left">DESCRIPTION</TableCell> */}
            <TableCell align="left">PRICE&nbsp;</TableCell>
            <TableCell align="left">QUANTITY&nbsp;</TableCell>
            <TableCell align="left">TOTAL&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={index} // Assuming "id" is a unique identifier for each product
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left"> <img src={item.image} alt={item.title} width={120} /></TableCell>
              <TableCell component="th" scope="item">
                {item.title}
              </TableCell>
            
              {/* <TableCell align="left">{item.description}</TableCell> */}
            
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">  <div className='cart-controls'>
                  <button onClick={() => removeQuantity(item)} className='cart-btn'>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => addQuantity(item)} className='cart-btn'>
                    +
                  </button>
                </div></TableCell>
                <TableCell align="left"> 
              <div className='cart-image'>
                <div className='remove-item' onClick={() => removeItem(item)}>
                  <RemoveCircleOutlineIcon />
                  Remove
                </div>
              </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <div className='cart-summary'>
          <div>
            <h2 className='summary-title'>Summary</h2>
          </div>
          <div className='checkout'>
            <div className='checkout-price'>
              <p className='check-out'>Subtotal: </p>
              <p className='check-out'>${total} </p>
            </div>
            <p className='chec'>Delivery fees not yet included </p>
            {/* <div className='checkout-btn'>Checkout</div> */}
            <NavLink to="/checkout">
                          <div className='checkout-btn'>CHeckout</div>
                          </NavLink>

          </div>
          {/* <TransitionsModal /> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
