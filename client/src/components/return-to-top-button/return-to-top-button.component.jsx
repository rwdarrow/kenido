import React from "react";
import { PropTypes } from "prop-types";

import {
  ReturnToTopContainer,
  Button,
  ArrowToTopIcon,
} from "./return-to-top-button.styles";

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// Note: sometimes this won't work because it's not the window
// that is scrolling, it's a div. In this case, this can still be used,
// but you will need to implement a class component with ref to the scrolling
// div. See withTextContainer for an example of this. If you use this component
// in that manner, you will need to surround it in a div and call the onClick
// function from there, otherwise it will conflict with the internal onClick and
// will not work.
const ReturnToTopButton = ({ hidden }) => (
  <ReturnToTopContainer
    variants={variants}
    initial="hidden"
    animate={hidden ? "hidden" : "visible"}
  >
    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ArrowToTopIcon />
    </Button>
  </ReturnToTopContainer>
);

ReturnToTopButton.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ReturnToTopButton;
