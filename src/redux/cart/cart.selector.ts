import { createSelector } from "reselect";
import { AppStateTypes } from "../root.reducer";

export const selectCartReducer = (state: AppStateTypes) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems,
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0),
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, item) => acc + item.quantity * item.selling_price,
      0,
    ),
);

export const selectCartItemsTotalDiscount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, item) =>
        acc + item.quantity * (item.discount_price ? item?.discount_price : 0),
      0,
    ),
);

export const selectTotal = createSelector(
  [selectCartItemsTotalPrice, selectCartItemsTotalDiscount],
  (cartItemsTotalPrice, cartItemsTotalDiscount) =>
    cartItemsTotalPrice - cartItemsTotalDiscount,
);
