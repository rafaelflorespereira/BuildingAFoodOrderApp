import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const totalAmountHandler = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountHandler}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
