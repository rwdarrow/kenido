import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { LanguageContext } from "../../containers/language";
import { showProductDetailsModal } from "../../redux/shop/shop.actions";

import {
  ProductPreviewContainer,
  ImageContainer,
  PreviewFooter,
  ProductInfo,
  SaleContainer,
} from "./product-preview.styles";

const ProductPreview = ({ item, showModal }) => {
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
    <ProductPreviewContainer onClick={() => showModal(item)}>
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
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (item) => dispatch(showProductDetailsModal(item)),
});

export default connect(null, mapDispatchToProps)(ProductPreview);
