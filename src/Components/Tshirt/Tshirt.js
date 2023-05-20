import React from "react";
import "./Tshirt.css";

const Tshirt = (props) => {
  const { name, picture, price } = props.tshirt;
  return (
    <div className="tshirt-container">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>
        <strong>Price : </strong>
        {price}{" "}
      </p>
      <button onClick={() => props.handleAddToCart(props.tshirt)}>
        Add to cart
      </button>
    </div>
  );
};

export default Tshirt;
