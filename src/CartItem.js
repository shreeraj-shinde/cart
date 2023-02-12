import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="ItemImage" />
      </div>
      <div className="right-block">
        <div style={{ fintSize: 25 }}>Title</div>
        <div style={{ color: "#777" }}>Price </div>
        <div style={{ color: "#777" }}> Qty</div>
        <div className="cart-item-actions">{/**Buttons */}</div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    weigth: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
