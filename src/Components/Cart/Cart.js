import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>{cart.length}</h2>
      {cart.map((item) => {
        return (
          <p>
            {item.name}{" "}
            <button
              onClick={() => {
                removeFromCart(item);
              }}
            >
              X
            </button>{" "}
          </p>
        );
      })}
    </div>
  );
};

export default Cart;
