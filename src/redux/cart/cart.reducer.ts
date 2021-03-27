import {
  CartItemProps,
  CartActionsTypes,
  CartActionsTypesEnums,
} from "./cart.types";
import { onAddCartItem, onRemoveCartItem, onClearCartItem } from "./cart.utils";

type CartReducerTypes = {
  cartItems: CartItemProps[];
};

const INITIAL_STATE: CartReducerTypes = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes) => {
  switch (action.type) {
    case CartActionsTypesEnums.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: onAddCartItem(state.cartItems, action.payload),
      };

    case CartActionsTypesEnums.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: onRemoveCartItem(state.cartItems, action.payload),
      };

    case CartActionsTypesEnums.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: onClearCartItem(state.cartItems, action.payload),
      };

    case CartActionsTypesEnums.CLEAR_ENTIRE_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
