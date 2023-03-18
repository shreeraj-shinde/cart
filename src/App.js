import "./App.css";
import CartItem from "./CartItem";
import Cart_Comp from "./Cart_Comp";
import Navbar from "./navbar";
import React from "react";
import db from "./index";
import {
  collection,
  Firestore,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  increment,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const getProduct = collection(db, "products");
    const productSnapshot = await getDocs(getProduct);
    const products = productSnapshot.docs.map((doc) => {
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    });

    this.setState({
      products: products,
      loading: false,
    });
  }
  increaseQuantity = (product) => {
    const { products } = this.state;
    const productRef = doc(db, "products", product.id);
    updateDoc(productRef, {
      Quantity: increment(1),
    });
    this.setState({
      products,
    });
    this.forceUpdate();
  };

  decreaseQuantity = (product) => {
    const { products } = this.state;
    const productRef = doc(db, "products", product.id);
    updateDoc(productRef, {
      Quantity: increment(-1),
    });

    this.setState({
      products,
    });
    this.forceUpdate();
  };

  deleteProduct = (product) => {
    const { products } = this.state;
    deleteDoc(doc(db, "products", product.id));
    this.setState({
      products,
    });
    this.forceUpdate();
  };

  addProduct = () => {
    addDoc(collection(db, "products"), {
      img: "",
      Price: 999,
      Quantity: 1,
      title: "Laptop",
    });
    this.forceUpdate();
  };

  render() {
    const { products, loading } = this.state;
    const getTotalPrice = () => {
      let total_price = 0;
      products.map((product) => {
        total_price = total_price + product.Price * product.Quantity;
      });
      return total_price;
    };

    const totalProducts = () => {
      let total_products = 0;
      products.map((product) => {
        total_products = total_products + product.Quantity;
      });
      return total_products;
    };
    return (
      <div className="App">
        <Navbar count={totalProducts()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add Product
        </button>
        <Cart_Comp
          products={products}
          increment={this.increaseQuantity}
          decrement={this.decreaseQuantity}
          deleteItem={this.deleteProduct}
        />
        {loading && <h4>Loading Products....s</h4>}
        <div>Total : {getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
