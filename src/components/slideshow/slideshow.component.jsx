import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withLocalize } from "react-localize-redux";
import { withRouter } from "react-router-dom";

import { updateCollections } from "../../redux/shop/shop.actions";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CustomButton from "../custom-button/custom-button.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import Spinner from "../spinner/spinner.component";

import {
  ImageContainer,
  ButtonContainer,
  LeftSlideshowButton,
  RightSlideshowButton,
  LeftIcon,
  RightIcon,
} from "./slideshow.styles";

const Slideshow = ({ updateCollections, collections, activeLanguage }) => {
  const [loading, setLoading] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);

  const handleLeftClick = () => {
    // if at start, go to the end, otherwise go down one
    setSlideNumber(
      slideNumber === 0 ? collections.length - 1 : slideNumber - 1
    );
  };

  const handleRightClick = () => {
    // if before end, go up one, otherwise go to start
    setSlideNumber(slideNumber < collections.length - 1 ? slideNumber + 1 : 0);
  };

  return loading ? (
    <Spinner />
  ) : (
    <ImageContainer
      style={{
        backgroundImage: `url(${collections[slideNumber].previewImageUrl})`,
      }}
      alt={`${
        collections[slideNumber].name[activeLanguage.name.toLowerCase()]
      } image`}
    >
      <ButtonContainer>
        <LeftSlideshowButton onClick={handleLeftClick}>
          <LeftIcon />
        </LeftSlideshowButton>
        <CustomButton route={collections[slideNumber].routeName}>
          {`${
            collections[slideNumber].name[activeLanguage.name.toLowerCase()]
          }`.toUpperCase()}
        </CustomButton>
        <RightSlideshowButton onClick={handleRightClick}>
          <RightIcon />
        </RightSlideshowButton>
      </ButtonContainer>
    </ImageContainer>
  );
};

Slideshow.propTypes = {
  updateCollections: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default withRouter(
  withLocalize(connect(mapStateToProps, mapDispatchToProps)(Slideshow))
);