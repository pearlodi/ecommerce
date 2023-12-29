import * as React from "react";
import { useSelector } from "react-redux";

export default function CheckoutTable() {
  const cart = useSelector((state) => state.cart.cart);
 
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <div className="">
      <div className="checkout-products">
        <div className="checkout-products-head">
          <p>PRODUCTS</p>
        </div>
        <div className="cart-checkout">
          {cart.map((item, index) => (
            <div className="checkout-table-items">
              <div>
                <img src={item.image} alt={item.title} width={150} />
              </div>
              <div className="checkout-table-details">
                <h1>{item.class}</h1>

                <p>Price: ${item.price}</p>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout-products-summary">
        <div className="checkout-products-head">
          <p>
            <strong>TOTAL:</strong>
          </p>
          <p>${total}</p>
        </div>
        <div className="">
          <div className="checkout-table-items">
            <div className="checkout-table-details"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
