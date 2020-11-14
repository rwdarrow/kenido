import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections // !! evaluates any value (including objects) to truthy or falsy
)

export const selectModalItemToShow = createSelector(
  [selectShop],
  (shop) => shop.modalItemToShow
)

export const selectIsModalShowing = createSelector(
  [selectShop],
  (shop) => shop.isModalShowing
)