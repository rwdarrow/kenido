import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Header from "../../components/header/header.component";
import CollectionCategoriesContainer from "../../components/collection-categories/collection-categories.component";
import Footer from "../../components/footer/footer.component";

import { ShopPageContainer } from "./shop.styles";

const ShopPage = ({ fetchCollectionsStart }) => {
  // fetch the collections when the page loads
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <>
      <Header />
      <ShopPageContainer>
        <CollectionCategoriesContainer />
      </ShopPageContainer>
      <Footer />
    </>
  );
};

ShopPage.propTypes = {
  fetchCollectionsStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
