import React, { useEffect, useState, useContext, useCallback } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import { LanguageContext } from "../../containers/language";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import CustomButton from "../custom-button/custom-button.component";

import {
  SlideshowContainer,
  PreviewImageContainer,
  ButtonContainer,
  LeftSlideshowButton,
  RightSlideshowButton,
  LeftIcon,
  RightIcon,
} from "./slideshow.styles";

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Slideshow = ({ sections }) => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, sections.length, page);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [setPage, page]);

  // animate the slideshow every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <SlideshowContainer>
      <AnimatePresence initial={true} custom={direction}>
        <PreviewImageContainer
          key={page}
          style={{
            backgroundImage: `url(${sections[imageIndex].previewImage})`,
          }}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <ButtonContainer>
        <LeftSlideshowButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={() => paginate(-1)}
        >
          <LeftIcon />
        </LeftSlideshowButton>
        <CustomButton route={sections[imageIndex].linkUrl}>
          {`${sections[imageIndex].name[language.id]}`.toUpperCase()}
        </CustomButton>
        <RightSlideshowButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={() => paginate(1)}
        >
          <RightIcon />
        </RightSlideshowButton>
      </ButtonContainer>
    </SlideshowContainer>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

Slideshow.propTypes = {
  sections: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Slideshow));
