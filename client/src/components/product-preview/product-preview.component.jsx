import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

import { LanguageContext } from "../../containers/language";

import {
  ProductPreviewContainer,
  ImageContainer,
  PreviewFooter,
  ProductInfo,
  SaleContainer,
} from "./product-preview.styles";

const ProductPreview = ({ item, history }) => {
  const { name, price, imageUrls, sale } = item;

  const languageContext = useContext(LanguageContext);
  const currentLanguageId = languageContext.language.id;

  const formattedPrice =
    currentLanguageId === "de"
      ? new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(price)
      : new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "EUR",
        }).format(price);

  return (
    <ProductPreviewContainer>
      {sale && <SaleContainer>SALE</SaleContainer>}
      <ImageContainer style={{ backgroundImage: `url(${imageUrls[0]})` }} />
      <PreviewFooter>
        <ProductInfo>
          {name[currentLanguageId]}
          &nbsp;&nbsp;
          {"|"}
          &nbsp;&nbsp;
          {formattedPrice}
        </ProductInfo>
      </PreviewFooter>
    </ProductPreviewContainer>
  );
};

ProductPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default withRouter(ProductPreview);
