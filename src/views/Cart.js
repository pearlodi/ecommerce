import React from "react";
import "../assets/css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navigator/Header";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";

import CartNav from "../components/Navigator/CartNav";
import { NavLink } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import Notification from "../components/Notification/CartNotification";
import { hideNotification } from "../redux/CartSlice";
import { hideNotifications } from "../redux/WishSlice";
import AlertModal from '../components/Modals/AlertModal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from "../components/Navigator/Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.cart.notification || { message: '', show: false });
  const handleCloseNotification = () => {
    dispatch(hideNotification());
    dispatch(hideNotifications());
  };
  

  const addQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const removeQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  console.log(removeQuantity);
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

    

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        
        <div className="state">
          <img
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
            alt=""
            width={550}
          />
          <p className="empty-message">Your cart is empty</p>
          <NavLink to="/product">
            <p className="empty"><ReplyAllOutlinedIcon style={{color:"black"}}/>Add items to cart</p>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <NavLink to="/product">
 
            <p className="back-to-cart">       <ArrowBackIcon />Back to product list</p>
          </NavLink>

      {notification.show && (
         <Notification message={notification.message} onClose={handleCloseNotification} />
      )}
      <CartNav />
      
      <div className="cart-page">
        <TableContainer component={Paper} classNa>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="table-row"> IMAGE&nbsp;</TableCell>

                <TableCell className="table-row">TITLE</TableCell>

                {/* <TableCell align="left" className="table-row"> DESCRIPTION</TableCell> */}
                <TableCell align="left" className="table-row"> PRICE&nbsp;</TableCell>
                <TableCell align="left" className="table-row"> QUANTITY&nbsp;</TableCell>
                <TableCell align="left" className="table-row"> TOTAL&nbsp;</TableCell>
                <TableCell align="left" className="mobile-table-row"> &nbsp;Products</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow
                  key={index} 
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" className="table-row"> 
                    {" "}
                    <img src={item.image} alt={item.title} width={120} />
                  </TableCell>
                  <TableCell component="th" scope="item" className="table-row">
                    {item.title}
                  </TableCell>

                  {/* <TableCell align="left" className="table-row"> {item.description}</TableCell> */}

                  <TableCell align="left" className="table-row"> {item.price}</TableCell>
                  <TableCell align="left" className="table-row"> 
                    {" "}
                    <div className="cart-controls">
                      <button
                        onClick={() => removeQuantity(item)}
                        className="cart-btn"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => addQuantity(item)}
                        className="cart-btn"
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="left" className="table-row"> 
                    <div className="cart-image">
                      {/* Replace the direct removeItem(item) with BasicModal */}
                      <p>{item.price * item.quantity}</p>
                    </div>
                  </TableCell>
                  <TableCell align="left" className="table-row"> 
                    <div className="cart-image">
                      {/* Replace the direct removeItem(item) with BasicModal */}
                      <AlertModal item={item} />
                    </div>
                  </TableCell>
           
                  <TableCell align="left" className="mobile-table"> 
                    {" "}
                    <div className="mobile-table">
                   <div>
                   <img src={item.image} alt={item.title} width={120} />
                    <div className="cart-controls">
                      <button
                        onClick={() => removeQuantity(item)}
                        className="cart-btn"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => addQuantity(item)}
                        className="cart-btn"
                      >
                        +
                      </button>
                      <TableCell align="left" className="mobile-table"> 
                    <div className="">
                    
                      <AlertModal item={item} />
                    </div>
                  </TableCell>
                    </div>
                   </div>
                     <div className="mobile-table-details">
                      <p>
                     {item.title} 
                      </p>
                      <p className="mobile-table-desc">
                      {item.description}
                      </p>
                     </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        

        <div className="cart-summary">
          <div></div>
          <div className="checkout">
            <div className="checkout-price">
              <p className="check-out">Total: </p>
              <p className="check-out">${total} </p>
            </div>
            <p className="chec">Delivery fees not yet included </p>
            {/* <div className='checkout-btn'>Checkout</div> */}
            <NavLink to="/checkout">
              <div className="checkout-btn">CHeckout</div>
            </NavLink>
          </div>
        </div>
      </div>
      
     <div className="footer-div">
     <Footer />
     </div>
    </div>
  );
};

export default Cart;
