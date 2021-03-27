import React from "react";
import "./cart-page.styles.scss";
import CartItemsCollection from "../../components/cart-items-collection/cart-items-collection.component";
import CartSummary from "../../components/cart-summary/cart-summary.component";

const CartPage: React.FC = () => {
  return (
    <main className="cart-page">
      <CartItemsCollection />

      <CartSummary />
    </main>
  );
};

export default CartPage;
