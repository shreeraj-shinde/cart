import "./App.css";
import CartItem from "./CartItem";
function App() {
  return (<>
   <div className="App">
      <h1>Cart</h1>
    </div>
    <CartItem title={''} quantity={0} price = {0} img={''}/>
    </>
   
  );
}

export default App;
