import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionCategory from "../collection-category/collection-category.component"

import { CollectionCategoriesContainer } from "./collection-categories.styles";

const CollectionCategories = ({ collections }) => (
  <CollectionCategoriesContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionCategory key={id} {...otherCollectionProps} />
    ))}
  </CollectionCategoriesContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionCategories);
