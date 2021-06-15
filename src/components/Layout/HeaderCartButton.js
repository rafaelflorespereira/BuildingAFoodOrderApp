import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
    return <button onClick={props.onOpenClick}>
        <span className={classes.button}>
            <CartIcon />
        </span>
        <span className={classes.icon}>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton