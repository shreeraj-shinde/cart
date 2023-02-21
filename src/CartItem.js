import { useState } from "react";
import React from "react";

const CartItem = (props) => {
  const [count ,SetCount] = useState(0)
  const [title ,SetTitle] = useState("Mobile Phone")
  const[price,SetPrice] = useState(999)
  
  const incQty = () =>{
    
    SetCount(count+1);
    SetPrice(price*2);
  }
  const decQuantity = () =>{
    if(count === 0){
      return
    }else{
      SetCount(count-1)
      SetPrice(price - price)
    }
  }

  const deleteall = () =>{
    SetPrice(0);
    SetCount(0);
  }
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="ItemImage" />
      </div>
      <div className="right-block">
        <div style={{ fintSize: 25 }}>Product Name : {title}</div>
        <div style={{ color: "#777" }}>Price : {price} </div>
        <div style={{ color: "#777" }}>Quantity : {count}</div>
        <div className="cart-item-actions">
          {/**Buttons */}
          <img
            alt="increase"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            className="action-icons"
            onClick={incQty}
          />
          <img
            alt="decrease"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            className="action-icons"
            onClick={decQuantity}
          />
          <img
            alt="delete"
            src="https://cdn-icons-png.flaticon.com/512/3132/3132919.png"
            className="action-icons"
            onClick={deleteall}
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
