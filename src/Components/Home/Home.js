import React, { useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import useTshirts from "../../Hook/UseTshirts";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItems) => {
    const exist = cart.find((item) => item.index === selectedItems.index);
    if (!exist) {
      const newCart = [...cart, selectedItems];

      setCart(newCart);
    } else {
      alert("alredy added");
    }
  };

  function removeFromCart(item) {
    const filter = cart.filter(
      (selectedItems) => item.index !== selectedItems.index
    );
    setCart(filter);
  }
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
