import { Dispatch } from "redux";
import { handleRequest } from "../../utils/api.utils";
import {
  FetchProductsCollectionFailure,
  FetchProductsCollectionStart,
  FetchProductsCollectionSuccess,
  ProductsCollectionActionsTypesEnum,
  ProductsCollectionProps,
} from "./products-collection.types";

export const fetchProductsCollectionStart = (
  collectionName: string,
): FetchProductsCollectionStart => ({
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_START,
  payload: {
    collectionName,
    isFetching: true,
    products: [],
    errorMessage: "",
  },
});

export const fetchProductsCollectionSuccess = (
  collection: ProductsCollectionProps,
): FetchProductsCollectionSuccess => ({
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchProductsCollectionFailure = (
  collectionName: string,
  errorMessage: string,
): FetchProductsCollectionFailure => ({
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_FAILURE,
  payload: {
    collectionName,
    errorMessage,
    products: [],
    isFetching: false,
  },
});

export const fetchProductsCollectionStartAsync = (query: string) => {
  return async (dispatch: Dispatch) => {
    console.log(`query`, query)
    dispatch(fetchProductsCollectionStart(query));

    try {
      // Get products using the query string passed (ie collection name)
      console.log(`collection`);
      const data = await handleRequest({
        endpoint: `search?q=${query}`,
      });

      const { result } = data || {};

      const collection: ProductsCollectionProps = {
        collectionName: query,
        products: result,
        isFetching: false,
        errorMessage: "",
      };
      dispatch(fetchProductsCollectionSuccess(collection));
    } catch (error) {
      dispatch(
        fetchProductsCollectionFailure(
          query,
          `An unexpected error occurred, please try again :(`,
        ),
      );
    }
  };
};
