import React from "react";
import "../assets/css/cart.css";
import Header from "../components/Navigator/Header";
import { removeFromCart, addToCart } from "../redux/CartSlice";
import { removeFromWish } from "../redux/WishSlice";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../components/Navigator/Footer";

const WishList = () => {
  const wish = useSelector((state) => state.wish.wish);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // const removeQuantity = (item) => {
  //   dispatch(decrementWishQuantity(item));
  // };

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const removeItem = (item) => {
    dispatch(removeFromWish(item));
  };

  const handleAddToCart = (item) => {
    if (!cart.some((x) => x.id === item.id)) {
      addItemToCart(item);
    }
  };

  if (wish.length === 0) {
    return (
      <div>
        <Header />
        <div className="state">
          <img
            src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
            alt=""
            width={550}
          />
          <p className="empty-message">Your wishlist is empty</p>
          <NavLink to="/product">
            <p className="empty">
              <ReplyAllOutlinedIcon style={{ color: "black" }} />
              Add items to wishlist
            </p>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <NavLink to="/product">
        <p className="back-to-cart">
          {" "}
          <ArrowBackIcon />
          Back to product list
        </p>
      </NavLink>
      <div className="wish-heart">
        <FavoriteBorderIcon style={{ color: "black" }} className="wish-heart" />
      </div>

      <div className="wish-list">
        <h1>WISH LIST</h1>
      </div>

      <div className="cart-page">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className="wish-list-table">
                  IMAGE&nbsp;
                </TableCell>
                <TableCell className="wish-list-mobile">PRODUCTS</TableCell>

                <TableCell className="wish-list-table">TITLE</TableCell>
                <TableCell align="left" className="wish-list-table">
                  PRICE&nbsp;
                </TableCell>
                <TableCell align="left" className="wish-list-table">
                  STATUS&nbsp;
                </TableCell>
                <TableCell align="left" className="wish-list-table">
                  &nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wish.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" className="wish-list-table">
                    <div className="remove-image">
                      <div className="cart-image">
                        <div
                          className="remove-item"
                          onClick={() => removeItem(item)}
                        >
                          <DeleteIcon style={{ color: "gray" }} />
                        </div>
                      </div>
                      <img src={item.image} alt={item.title} width={120} />
                      <div>
                        <h1>{item.class}</h1>
                        <p className="wish-description">{item.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="item"
                    className="wish-list-table "
                  >
                    {item.title}
                  </TableCell>
                  <TableCell align="left" className="wish-list-table">
                    {item.price}
                  </TableCell>
                  <TableCell align="left" className="wish-list-table">
                    <p>In stock</p>
                  </TableCell>
                  <TableCell align="left" className="wish-list-table">
                    {!cart.some((x) => x.id === item.id) ? (
                      <div className="wish-remove">
                        <div onClick={() => handleAddToCart(item)}>
                          <p>Add to cart</p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => removeItemFromCart(item)}
                        className="alert-cancel"
                      >
                        <p>Remove from cart</p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="left" className="wish-mobile-tables">
                    <div className="wish--table">
                      <div className="" onClick={() => removeItem(item)}>
                        <DeleteIcon style={{ color: "gray" }} />
                      </div>
                      <img src={item.image} alt={item.title} width={120} />
                      <div className="wish-table-details">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="product-details wish-table-btn">
                      {cart.some((x) => x.id === item.id) ? (
                        <p className="wish-btn-cart">
                          <span onClick={() => removeItemFromCart(item)}>
                            Remove from cart
                          </span>
                        </p>
                      ) : (
                        <p className="wish-btn-cart">
                          <span onClick={() => addItemToCart(item)}>
                            Add to cart
                          </span>
                        </p>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
