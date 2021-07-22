/* React can be ommited in some new React projects */
import { useState } from "react";

import Header from "./components/Layout/Header";
import MyHeader from "./components/UI/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <MyHeader />
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onClickCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
