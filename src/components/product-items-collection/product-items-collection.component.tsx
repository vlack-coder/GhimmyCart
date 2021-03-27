import { ProductsCollectionProps } from "../../redux/products-collection/products-collection.types";
import "./product-items-collection.styles.scss";
import { fetchProductsCollectionStartAsync } from "../../redux/products-collection/products-collection.actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import React, { useEffect } from "react";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCollectionByName } from "../../redux/products-collection/products-collection.selector";
import WithState from "../../HOCs/with-state.hoc";
import ProductItems from "./products-items.component";

// Controlling loading and error states using WithState
// Higher Order Component (HOC)
const ProductItemsWithState = WithState(ProductItems);

type HomePageProps = {
  name: string;
  title?: string;
};

type Props = HomePageProps;

const ProductItemsCollection: React.FC<Props> = ({
  name,
  title,
}: Props) => {
  const collection: ProductsCollectionProps | undefined = useSelector(selectCollectionByName(name))
  const { products, isFetching, errorMessage } = collection || {};

  const dispatch = useDispatch()

  useEffect(() => {
    // Fetch products collections only when the collection
    // is not existing.
    console.log(`collections`, name)
    if (!collection) {
      console.log(`nocolle`)
      dispatch(fetchProductsCollectionStartAsync(name));
    }

  }, [dispatch]);

  return (
    <section className="products-collection">
      <div className="center">
        <h2 className="heading-secondary products-collection__title">
          {title || name}
        </h2>
        <div className="products-collection__items">
          <ProductItemsWithState
            isLoading={isFetching}
            errorMessage={errorMessage}
            products={products}
            collectionName={name}
            handleRetry={() => dispatch(fetchProductsCollectionStartAsync(name))}
          />
        </div>
      </div>

    </section>
  );
};


export default ProductItemsCollection
