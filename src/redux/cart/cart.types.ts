import { ProductItemProps } from "../products-collection/products-collection.types";

export enum CartActionsTypesEnums {
  ADD_CART_ITEM = "ADD_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  CLEAR_CART_ITEM = "CLEAR_CART_ITEM",
  CLEAR_ENTIRE_CART = "CLEAR_ENTIRE_CART",
}

export type CartItemProps = {
  quantity: number;
  collection: string;
} & ProductItemProps;

export type AddCartItem = {
  type: CartActionsTypesEnums.ADD_CART_ITEM;
  payload: CartItemProps;
};

export type RemoveCartItem = {
  type: CartActionsTypesEnums.REMOVE_CART_ITEM;
  payload: CartItemProps;
};

export type UpdateCartItem = {
  type: CartActionsTypesEnums.UPDATE_CART_ITEM;
  payload: CartItemProps;
};

export type ClearCartItem = {
  type: CartActionsTypesEnums.CLEAR_CART_ITEM;
  payload: CartItemProps;
};

export type ClearEntireCart = {
  type: CartActionsTypesEnums.CLEAR_ENTIRE_CART;
};

export type CartActionsTypes =
  | AddCartItem
  | RemoveCartItem
  | UpdateCartItem
  | ClearCartItem
  | ClearEntireCart;
