import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [hasButtonEffect, setButtonEffect] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  /* Com || o hasButton da um lag bizarro */
  const buttonHighlighted = `${classes.button} ${
    hasButtonEffect ? classes.bump : ""
  } `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonEffect(true);

    const timer = setTimeout(() => {
      setButtonEffect(false);
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [items]);

  return (
    <button className={buttonHighlighted} onClick={props.onOpenClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
