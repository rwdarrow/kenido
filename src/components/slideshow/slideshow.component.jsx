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

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Slideshow = ({ sections }) => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, sections.length, page);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  });

  // animate the slideshow every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <SlideshowContainer>
      <AnimatePresence initial={false} custom={direction}>
        <PreviewImageContainer
          key={page}
          style={{
            backgroundImage: `url(${sections[imageIndex].previewImage})`,
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
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
        <LeftSlideshowButton onClick={() => paginate(-1)}>
          <LeftIcon />
        </LeftSlideshowButton>
        <CustomButton route={sections[imageIndex].linkUrl}>
          {`${sections[imageIndex].name[language.id]}`.toUpperCase()}
        </CustomButton>
        <RightSlideshowButton onClick={() => paginate(1)}>
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
