import React from "react";
import CartItem from "./CartItem";

const Cart_Comp = (props) => {
  return (
    <div className="cartItem-wrapper">
      {props.products.map((product) => (
        <CartItem
          product={product}
          key={product.id}
          increment={props.increment}
          decrement={props.decrement}
          deleteItem={props.deleteItem}
        />
      ))}
    </div>
  );
};

export default Cart_Comp;
