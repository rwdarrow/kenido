import React, { useEffect, useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { LanguageContext } from "../../containers/language";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import CustomButton from "../custom-button/custom-button.component";

import homeScarves from "../../assets/images/home-scarves.png"
import homePonchos from "../../assets/images/home-ponchos.png"

import {
  SlideshowContainer,
  ImageContainer,
  ButtonContainer,
  LeftSlideshowButton,
  RightSlideshowButton,
  LeftIcon,
  RightIcon,
} from "./slideshow.styles";

// preview images for collections. Must be in same order as collections in reducer
const previewImages = [homeScarves, homePonchos]

const Slideshow = ({ sections }) => {
  const languageContext = useContext(LanguageContext)
  const language = languageContext.language;

  const [slideNumber, setSlideNumber] = useState(0);

  // animate the slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNumber(slideNumber < sections.length - 1 ? slideNumber + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideNumber, sections.length]);

  const handleLeftClick = () => {
    // if at start, go to the end, otherwise go down one
    setSlideNumber(slideNumber === 0 ? sections.length - 1 : slideNumber - 1);
  };

  const handleRightClick = () => {
    // if before end, go up one, otherwise go to start
    setSlideNumber(slideNumber < sections.length - 1 ? slideNumber + 1 : 0);
  };

  return (
    <SlideshowContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${previewImages[slideNumber]})`,
        }}
        slideDidUpdate={slideNumber}
      />
      <ButtonContainer>
        <LeftSlideshowButton onClick={handleLeftClick}>
          <LeftIcon />
        </LeftSlideshowButton>
        <CustomButton route={sections[slideNumber].linkUrl}>
          {`${
            sections[slideNumber].name[language.text.toLowerCase()]
          }`.toUpperCase()}
        </CustomButton>
        <RightSlideshowButton onClick={handleRightClick}>
          <RightIcon />
        </RightSlideshowButton>
      </ButtonContainer>
    </SlideshowContainer>
  );
};

Slideshow.propTypes = {
  sections: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Slideshow));
