import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionCategories from "./collection-categories.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionCategoriesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionCategories);

export default CollectionCategoriesContainer;
