import React from "react";
import "./cart-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { RiDeleteBinLine } from "react-icons/ri";
import Counter from "../counter/counter.component";
import { CartItemProps } from "../../redux/cart/cart.types";
import { Link } from "react-router-dom";
import {
  formatter,
  PLACEHOLDER_PRODUCT_IMAGE,
  SENTENCE_LENGTH,
  sliceSentence,
} from "../../utils/utils";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../redux/cart/cart.actions";

type Props = {
  cartItem: CartItemProps;
};

const CartItem: React.FC<Props> = ({ cartItem }: Props) => {
  const dispatch = useDispatch();

  const {
    productImage,
    name,
    selling_price,
    quantity,
    description,
    slug,
    collection,
  } = cartItem || {};

  return (
    <div className="cart-item">
      <img
        src={productImage || PLACEHOLDER_PRODUCT_IMAGE}
        alt={name}
        className="cart-item__image"
      />

      <div className="cart-item__details">
        <div className="cart-item__header">
          <Link to={`/${collection}/${slug}`}>
            <h3 className="heading-tertiary">{name}</h3>
          </Link>

          <p className="cart-item__quantity-selling-price">
            {quantity} x {formatter(selling_price)}
          </p>

          <p className="cart-item__price">
            &#8358; {formatter(quantity * selling_price)}
          </p>
        </div>

        <p className="cart-item__description">
          {description?.length >= SENTENCE_LENGTH
            ? `${sliceSentence(description)}...`
            : description}
        </p>

        <div className="cart-item__footer">
          <CustomButton onClick={() => dispatch(clearCartItem(cartItem))}>
            <RiDeleteBinLine /> <span>Remove</span>
          </CustomButton>

          <Counter
            count={quantity}
            increaseCount={() => dispatch(addCartItem(cartItem))}
            decreaseCount={() => dispatch(removeCartItem(cartItem))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
