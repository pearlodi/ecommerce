import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementQuantity,
//   incrementQuantity,
//   removeFromCart,
// } from "../redux/CartSlice";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/CartSlice";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { NavLink } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';



const CartMobile = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

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
      <div className="cart-page">
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    {" "}
                    <img src={item.image} alt={item.title} width={120} />
                  </TableCell>
                  <TableCell component="th" scope="item">
                    {item.title}
                  </TableCell>

                  {/* <TableCell align="left">{item.description}</TableCell> */}

                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">
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
                  <TableCell align="left">
                    <div className="cart-image">
                      <div
                        className="remove-item"
                        onClick={() => removeItem(item)}
                      >
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
    </div>
  );
};

export default CartMobile;
