import { findExistingItem } from "../../utils/utils";
import { CartItemProps } from "./cart.types";

export const onAddCartItem = (
  cartItems: CartItemProps[],
  cartItemToAdd: CartItemProps,
) => {
  const { _id } = cartItemToAdd || {};

  // Check if cartItem is already existing
  const existingCartItem = findExistingItem({
    items: cartItems,
    key: "_id",
    value: _id as string,
  });

  // Add the cartItem as new if it wasn't existing
  if (!existingCartItem)
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  // Increase the quantity if it's already existing
  return cartItems.map((cartItem) =>
    cartItem._id === existingCartItem._id
      ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      : cartItem,
  );
};

export const onRemoveCartItem = (
  cartItems: CartItemProps[],
  cartItemToRemove: CartItemProps,
) => {
  const { _id } = cartItemToRemove;

  // Check if cartItem is already existing
  const existingCartItem = findExistingItem({
    items: cartItems,
    key: "_id",
    value: _id,
  });

  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item._id !== cartItemToRemove._id);

  if (existingCartItem)
    return cartItems.map((item) =>
      item._id === cartItemToRemove._id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );

  return cartItems;
};

export const onClearCartItem = (
  cartItems: CartItemProps[],
  cartItemToClear: CartItemProps,
) => {
  return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id);
};
