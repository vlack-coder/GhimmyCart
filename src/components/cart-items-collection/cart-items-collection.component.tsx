import "./cart-items-collection.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemCount,
  selectCartItems,
  selectTotal,
} from "../../redux/cart/cart.selector";
import { connect, useSelector } from "react-redux";
import { AppStateTypes } from "../../redux/root.reducer";
import { CartItemProps } from "../../redux/cart/cart.types";
import React from "react";
import { formatter } from "../../utils/utils";
import MessageBox from "../message-box/message-box.component";
import { useHistory } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

// type Props = LinkStateProps;

const CartItemsCollection: React.FC = () => {
  const history = useHistory();
  const cartItems: CartItemProps[] = useSelector(selectCartItems)
  const cartItemCount: number = useSelector(selectCartItemCount)
  const totalPrice: number = useSelector(selectTotal)
  return (
    <section className="cart-items-collection">
      <h2 className="heading-secondary">CART</h2>

      <div className="cart-items-collection__summary">
        {cartItemCount} item{cartItemCount > 1 ? "s" : ""} | &#8358;{" "}
        {formatter(totalPrice)}
      </div>

      {!cartItems?.length ? (
        <MessageBox
          buttonText="Continue Shopping"
          message={"You don't have any item in cart"}
          handleButtonClick={() => history.push("/")}
        >
          <RiShoppingCartLine className="cart-items-collection__image" />
        </MessageBox>
      ) : null}

      {cartItems.map((cartItem) => (
        <CartItem key={cartItem?._id} cartItem={cartItem} />
      ))}
    </section>
  );
};


export default CartItemsCollection;
