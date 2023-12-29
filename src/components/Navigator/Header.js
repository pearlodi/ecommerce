import React from "react";
import "../../assets/css/header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  const wish = useSelector((state) => state.wish.wish);
  const navigator = useNavigate();
  const navigateToWish = () => {
    navigator("/wishList");
  };
  return (
    <div className="header">
      <div class="header">
        <NavLink to="/">
          <div class="home-text">
            <p>Home</p>
          </div>
        </NavLink>
        <div class="logo-text">
          {" "}
          <h1>PEARL</h1>
        </div>
        <div className="cart-wish">
          <div className="cart">
            <div className="shopping-cart" onClick={navigateToCart}>
              <ShoppingCartIcon />
            </div>
            <h1 className="cart-count">{cart.length}</h1>
          </div>

          <div className="cart">
            <div className="shopping-cart" onClick={navigateToWish}>
              <FavoriteOutlinedIcon />
            </div>
            <h1 className="cart-count">{wish.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
