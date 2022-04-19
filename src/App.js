import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DECREASE, INCREASE } from "./action";
// redux stuff

const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
