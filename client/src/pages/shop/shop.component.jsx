import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import {
  fetchCollectionsStart,
  hideProductDetailsModal,
} from "../../redux/shop/shop.actions";

import Header from "../../components/header/header.component";
import CollectionCategoriesContainer from "../../components/collection-categories/collection-categories.component";
import ProductDetailsModal from "../../components/product-details-modal/product-details-modal.component";
import Footer from "../../components/footer/footer.component";

import { ShopPageContainer } from "./shop.styles";

const ShopPage = ({
  fetchCollectionsStart,
  hideModal,
  history,
}) => {
  // fetch the collections when the page loads
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // hide the product details modal when navigating away from the page
  useEffect(() => {
    hideModal();
  }, [hideModal, history.location])

  return (
    <>
      <Header />
      <ShopPageContainer>
        <CollectionCategoriesContainer />
        <ProductDetailsModal />
      </ShopPageContainer>
      <Footer />
    </>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStart: PropTypes.func.isRequired,
  hideProductDetailsModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  hideModal: () => dispatch(hideProductDetailsModal()),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
