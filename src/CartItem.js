import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={props.product.img} alt="ItemImage" />
      </div>
      <div className="right-block">
        <div style={{ fintSize: 25 }}> {props.product.title}</div>
        <div style={{ color: "#777" }}>Price :{props.product.Price}</div>
        <div style={{ color: "#777" }}>Quantity : {props.product.Quantity}</div>
        <div className="cart-item-actions">
          {/**Buttons */}
          <img
            alt="increase"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            className="action-icons"
            onClick={() => props.increment(props.product)}
          />
          <img
            alt="decrease"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            className="action-icons"
            onClick={() => props.decrement(props.product)}
          />
          <img
            alt="delete"
            src="https://cdn-icons-png.flaticon.com/512/3132/3132919.png"
            className="action-icons"
            onClick={() => props.deleteItem(props.product)}
          />
        </div>
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
