import {
  ProductsCollectionActionsTypes,
  ProductsCollectionActionsTypesEnum,
  ProductsCollectionProps,
} from "./products-collection.types";
import {
  handleCollectionUpdates,
  handleFetchCollectionStart,
} from "./products-collection.utils";

type ProductsCollectionsReducerTypes = {
  productsCollections: ProductsCollectionProps[];
};

const INITIAL_STATE: ProductsCollectionsReducerTypes = {
  productsCollections: [],
};

const productsCollectionsReducer = (
  state = INITIAL_STATE,
  action: ProductsCollectionActionsTypes,
): ProductsCollectionsReducerTypes => {
  switch (action.type) {
    case ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_START:
      return {
        ...state,
        productsCollections: handleFetchCollectionStart(
          state.productsCollections,
          action.payload,
        ),
      };

    case ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_SUCCESS:
    case ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_FAILURE:
      return {
        ...state,
        productsCollections: handleCollectionUpdates(
          state.productsCollections,
          action.payload,
        ),
      };

    default:
      return state;
  }
};

export default productsCollectionsReducer;
