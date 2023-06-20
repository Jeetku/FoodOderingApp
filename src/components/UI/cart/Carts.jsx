import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";

import "../../../styles/shopping-cart.css";

import { useDispatch, useSelector } from "react-redux";
import { cartUIActions } from "../../../store/shoppingCart/cartUiSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <div className="cart_container">
        <ListGroup className="cart">
          <div className="cart_close">
            <span onClick={toggleCart}>
              <i class="ri-close-fill"></i>
            </span>
          </div>
          <div className="cart_item-list">
            {cartProducts.length === 0 ? (
              <h6 className="text-center mt-5">
                No Items are added to the cart
              </h6>
            ) : (
              cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
            )}
          </div>
          <div className="cart_bottom d-flex align-items-center justify-content-between">
            <h6>
              SubTotal Amount: <span>${totalAmount}</span>
            </h6>
            <button>
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </ListGroup>
      </div>
    </>
  );
};

export default Carts;
