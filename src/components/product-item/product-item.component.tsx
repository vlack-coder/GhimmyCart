import { useHistory } from "react-router-dom";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import { formatter, PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";

import "./product-item.styles.scss";
import React from "react";
import CustomIcon from "../custom-icon/custom-icon.component";
import { MdAddShoppingCart } from "react-icons/md";
import { addCartItem } from "../../redux/cart/cart.actions";
import { CartItemProps } from "../../redux/cart/cart.types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

type Props = {
  productItem: ProductItemProps;
  collectionName: string;
};

const ProductItem: React.FC<Props> = ({
  productItem,
  collectionName,
}: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { productImage, name, selling_price, merchant, slug } =
    productItem || {};

  const cartItem = { ...productItem, collection: collectionName };

  const handleAddCartItem = (event: Event) => {
    event.stopPropagation();

    dispatch(addCartItem(cartItem as CartItemProps));
    toast("Item added to cart successfully!", {
      position: "bottom-center",
    });
  };
// console.log(slug)
  return (
    <article
      className="product-item"
      onClick={() => history.push(`/${collectionName}/${slug}`)}
    >
      <img
        src={productImage || PLACEHOLDER_PRODUCT_IMAGE}
        alt={name}
        className="product-item__image"
        loading="lazy"
      />

      <div className="product-item__details">
        <div className="product-item__details--top">
          <h3 className="heading-tertiary">{name}</h3>

          <CustomIcon onClick={handleAddCartItem}>
            <MdAddShoppingCart />
          </CustomIcon>
        </div>

        <div className="product-item__details--bottom">
          <p className="product-item__price">
            &#8358; {formatter(selling_price || 0)}
          </p>
          <p className="product-item__store">{merchant?.name}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
