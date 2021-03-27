import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import ProductItem from "../product-item/product-item.component";
import React from "react";

type Props = {
  products: ProductItemProps[];
  collectionName: string;
};

const ProductItems: React.FC<Props> = ({ products, collectionName }: Props) => (
  <>
    {products?.map((product) => (
      <ProductItem
        collectionName={collectionName}
        key={product?._id}
        productItem={product}
      />
    ))}
  </>
);

export default ProductItems;
