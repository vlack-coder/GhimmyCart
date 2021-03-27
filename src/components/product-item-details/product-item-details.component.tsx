import "./product-item-details.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import { PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";
import { CartItemProps } from "../../redux/cart/cart.types";
import { useHistory, useRouteMatch } from "react-router-dom";

type TParams = { collection: string };

type Props = {
  product: ProductItemProps | undefined;
};

const ProductItemDetails: React.FC<Props> = ({ product }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch<TParams>();

  const { collection } = match.params;

  const { productImage, name, merchant, description } = product || {};

  const cartItem = { ...product, collection };

  const handleAddCartItem = () => {
    dispatch(addCartItem(cartItem as CartItemProps));
    toast("Item added to cart successfully!", {
      position: "bottom-center",
    });
  };

  return (
    <section className="product-item-details">
      <div className="product-item-details__image-container">
        <img
          src={productImage || PLACEHOLDER_PRODUCT_IMAGE}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="product-item-details__info-container">
        <h2 className="product-item-details__title">{name}</h2>
        <p className="product-item-details__store-name">{merchant?.name} </p>

        <div className="product-item-details__buttons">
          <CustomButton onClick={handleAddCartItem}>Add to Cart</CustomButton>

          <CustomButton onClick={() => history.push("/cart")}>
            Go To Cart
          </CustomButton>
        </div>

        <p
          className="product-item-details__description"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
      </div>
    </section>
  );
};

export default ProductItemDetails;
