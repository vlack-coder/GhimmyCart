import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import ProductItemDetails from "../../components/product-item-details/product-item-details.component";
import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import {
  selectCollectionErrorMessage,
  selectIsFetchingCollection,
  selectProduct,
} from "../../redux/products-collection/products-collection.selector";
import { AppStateTypes } from "../../redux/root.reducer";
import "./product-item-page.styles.scss";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import WithState from "../../HOCs/with-state.hoc";
import React from "react";

const ProductItemDetailsWithState = WithState(ProductItemDetails);

type TParams = {
  collection: string;
  product_slug: string;
};

type ProductItemPageProps = RouteComponentProps<TParams>;

type Props = ProductItemPageProps & LinkStateProps;

const ProductItemPage: React.FC<Props> = ({
  match,
  productItem,
  isLoading,
  collectionErrorMessage,
}: Props) => {
  const { collection } = match.params;

  return (
    <main className="product-item-page">
      {!isLoading && (
        <ProductItemDetailsWithState
          isLoading={isLoading}
          errorMessage={collectionErrorMessage}
          product={productItem}
        />
      )}

      <ProductItemsCollection title="Similar Products" name={collection} />
    </main>
  );
};

type LinkStateProps = {
  productItem: ProductItemProps | undefined;
  isLoading: boolean | undefined;
  collectionErrorMessage: string | undefined;
};

const mapStateToProps = (
  state: AppStateTypes,
  ownProps: ProductItemPageProps,
): LinkStateProps => {
  const { collection, product_slug } = ownProps.match.params;

  return {
    productItem: selectProduct(collection, product_slug)(state),
    isLoading: selectIsFetchingCollection(collection)(state),
    collectionErrorMessage: selectCollectionErrorMessage(collection)(state),
  };
};

export default connect(mapStateToProps)(ProductItemPage);
