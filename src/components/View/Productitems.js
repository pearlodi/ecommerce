import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/CartSlice";
import { addToWish, removeFromWish } from "../../redux/WishSlice";
import { useSelector } from "react-redux";
import Modal from "../Modals/Modal";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Productitems = ({ item }) => {
  const [showText, setShowText] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [wishList, setWishList] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const wish = useSelector((state) => state.wish.wish)
  const selectedCategory = useSelector((state) => state.cart.selectedCategory);
  const selectedColor = useSelector((state) => state.cart.selectedColor);
  const selectedPrice = useSelector((state) => state.cart.selectedPrice);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const addItemToWish = (item) => {
    dispatch(addToWish(item));
  };

  const removeItemFromWish = (item) => {
    dispatch(removeFromWish(item));
  };
  if (
    (selectedCategory && item.category !== selectedCategory) ||
    (selectedPrice && item.price !== selectedPrice ) ||
    (selectedColor && item.color !== selectedColor)
  ) {
    return null;
  }
  return (
     <div className="all-products">
      <div className="product-item">
          <div className="product-img">
            <div className="product-image">
            <img src={item.image} alt={item.title} className="product--img" />
            </div>
            <div className="carts">
              <div className="">
                <div className="product-btn-cart">
                  <div className="product-icon">
                    <div
                      className="product--icon"
                      onMouseEnter={() => setShowText(true)}
                      onMouseLeave={() => setShowText(false)}
                    >
                        <div className="icon-details">
                        {cart.some((x) => x.id === item.id) ? (
                          <div className="item-btn-cart">
                            <div onClick={() => removeItemFromCart(item)}>
                              <RemoveShoppingCartIcon className="prod-icon" />
                            </div>
                          </div>
                        ) : (
                            <div onClick={() => addItemToCart(item)}  className="item-btn-cart">
                              <ShoppingCartIcon className="prod-icon" />
                            </div>
                        )}
                      </div>
                      {showText && (
                        <div className="icon-name">
                          {cart.some((x) => x.id === item.id) ? (
                            <div className="icon-name">
                              <div onClick={() => removeItemFromCart(item)}>
                                <p>Remove from cart</p>
                              </div>
                            </div>
                          ) : (
                            <p className="icon-name">Add to cart</p>
                          )}
                        </div>
                      )}
                    
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="product-btn-cart view-icon">
                  <div className="product-icon">
                    <div
                      className="product--icon"
                      onMouseEnter={() => setShowProducts(true)}
                      onMouseLeave={() => setShowProducts(false)}
                    >
                     
                      <div className="icon-details">
                      <Modal item={item} />
                      </div>
                      {showProducts && (
                        <div className="icon-name" >
                        Quick view
                        </div>
                      )}
                    </div>
                  </div>
                </p>
              </div>
              <div>
                <p className="product-btn-cart view-icon">
                     <div>
                <p className="product-btn-cart">
                  <div className="product-icon">
                    <div
                      className="product--icon"
                      onMouseEnter={() => setWishList(true)}
                      onMouseLeave={() => setWishList(false)}
                    >
                      <div className="icon-details">
                        {wish.some((x) => x.id === item.id) ? (
                            <div onClick={() => removeItemFromWish(item)} className="item-btn-cart">
                              <FavoriteOutlinedIcon className="prod-icon" />
                            </div>
                        ) : (
                            <div onClick={() => addItemToWish(item)}className="item-btn-cart">
                              <FavoriteBorderIcon className="prod-icon" />
                          </div>
                        )}
                      </div>
                      {wishList && (
                        <div className="icon-name">
                          {wish.some((x) => x.id === item.id) ? (
                            <div className="icon-name">
                              <div onClick={() => removeItemFromWish(item)}>
                                <p>Remove from wish</p>
                              </div>
                            </div>
                          ) : (
                            <p className="icon-name">Add to wish list</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </p>
              </div>
                </p>
              </div>
            </div>
          </div>
      </div>
          <div className="products--desc">
            <div className="modal">
          
          <div>
          <p className="product-price">
                {item.class}
              </p>
            </div>
           <div>
           <p className="product-price">
                 ${item.price}
              </p>
            </div>
            </div>
            <div className="product-desc-details">
            {cart.some((x) => x.id === item.id) ? (
              <div className="product-rem-cart"  onClick={() => removeItemFromCart(item)}>
                <span>
                  Remove from cart
                </span>
                <ShoppingCartIcon style={{ width: 15 }} />
              </div>
            ) : (
              <div className="product-add-cart" onClick={() => addItemToCart(item)}>
                <span >Add to cart</span>
                <ShoppingCartIcon style={{ width: 15 }} />
              </div>
            )}
          </div>
          </div>
    </div>
  );
};

export default Productitems;
