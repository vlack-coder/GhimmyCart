export enum ProductsCollectionActionsTypesEnum {
  FETCH_PRODUCTS_COLLECTION_START = "FETCH_PRODUCTS_COLLECTION_START",
  FETCH_PRODUCTS_COLLECTION_SUCCESS = "FETCH_PRODUCTS_COLLECTION_SUCCESS",
  FETCH_PRODUCTS_COLLECTION_FAILURE = "FETCH_PRODUCTS_COLLECTION_FAILURE",
}

export type ProductItemTypes = {
  _id: string;
  name: string;
  otherImages: any[];
  available: boolean;
  selling_price: number;
  discount_price: number | null;
  slug: string;
  tags: string[];
  description: string;
  productImage?: string;
  brand?: string;
  merchant: {
    name: string;
    email: string;
  };
};

export type ProductsCollectionProps = {
  collectionName: string;
  products: ProductItemProps[];
  isFetching: boolean;
  errorMessage: string;
};

export type ProductItemProps = ProductItemTypes | null;

// Types for actions
export type FetchProductsCollectionStart = {
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_START;
  payload: ProductsCollectionProps;
};

export type FetchProductsCollectionSuccess = {
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_SUCCESS;
  payload: ProductsCollectionProps;
};

export type FetchProductsCollectionFailure = {
  type: ProductsCollectionActionsTypesEnum.FETCH_PRODUCTS_COLLECTION_FAILURE;
  payload: ProductsCollectionProps;
};

export type ProductsCollectionActionsTypes =
  | FetchProductsCollectionStart
  | FetchProductsCollectionSuccess
  | FetchProductsCollectionFailure;
