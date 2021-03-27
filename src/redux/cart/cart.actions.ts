import {
  CartItemProps,
  CartActionsTypesEnums,
  ClearCartItem,
  ClearEntireCart,
  UpdateCartItem,
  AddCartItem,
  RemoveCartItem,
} from "./cart.types";

export const addCartItem = (cartItemToAdd: CartItemProps): AddCartItem => ({
  type: CartActionsTypesEnums.ADD_CART_ITEM,
  payload: cartItemToAdd,
});

export const removeCartItem = (
  cartItemToAdd: CartItemProps,
): RemoveCartItem => ({
  type: CartActionsTypesEnums.REMOVE_CART_ITEM,
  payload: cartItemToAdd,
});

export const updateCartItem = (
  cartItemToAdd: CartItemProps,
): UpdateCartItem => ({
  type: CartActionsTypesEnums.UPDATE_CART_ITEM,
  payload: cartItemToAdd,
});

export const clearCartItem = (
  cartItemToClear: CartItemProps,
): ClearCartItem => ({
  type: CartActionsTypesEnums.CLEAR_CART_ITEM,
  payload: cartItemToClear,
});

export const clearEntireCart = (): ClearEntireCart => ({
  type: CartActionsTypesEnums.CLEAR_ENTIRE_CART,
});
