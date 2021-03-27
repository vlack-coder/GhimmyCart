import { createSelector } from "reselect";
import { AppStateTypes } from "../root.reducer";

export const selectCollectionsReducer = (state: AppStateTypes) =>
  state.productsCollectionsReducer;

export const selectCollections = createSelector(
  [selectCollectionsReducer],
  (collectionsReducer) => collectionsReducer.productsCollections,
);

export const selectCollectionByName = (collectionName: string) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.collectionName === collectionName,
    ),
  );

export const selectIsFetchingCollection = (collectionName: string) =>
  createSelector(
    [selectCollectionByName(collectionName)],
    (collection) => collection?.isFetching,
  );

export const selectCollectionErrorMessage = (collectionName: string) =>
  createSelector(
    [selectCollectionByName(collectionName)],
    (collection) => collection?.errorMessage,
  );

export const selectProduct = (collectionName: string, productSlug: string) =>
  createSelector([selectCollectionByName(collectionName)], (collection) => {
    if (!collection) return undefined;

    return collection.products?.find(
      (product) => product?.slug === productSlug,
    );
  });

export const selectAllIsFetching = createSelector(
  [selectCollections],
  (collecitons) => collecitons.some((collection) => collection.isFetching),
);
