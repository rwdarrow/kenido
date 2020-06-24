import React, { useContext } from "react";

import { LanguageContext } from "../../containers/language";

import ProductPreview from "../product-preview/product-preview.component";

import {
  CollectionCategoryContainer,
  CollectionTitle,
  ProductsContainer
} from "./collection-category.styles";

const CollectionCategory = ({ name, items }) => {
  const languageContext = useContext(LanguageContext);
  const currentLanguageId = languageContext.language.id;

  return (
    <CollectionCategoryContainer>
      <CollectionTitle>{name[currentLanguageId]}</CollectionTitle>
      <ProductsContainer>
        {items.map((item) => (
          <ProductPreview key={item.sku} item={item} />
        ))}
      </ProductsContainer>
    </CollectionCategoryContainer>
  );
};

export default CollectionCategory;
