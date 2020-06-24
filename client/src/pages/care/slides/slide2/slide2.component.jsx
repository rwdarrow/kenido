import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../../../containers/language";

import {
  ImageContainer,
  TextContainer,
  BodyContainer,
  Paragraph,
  ScrollDownButtonContainer,
  ScrollDownIcon,
} from "./slide2.styles";

import {
  imageContainerVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./slide2.variants";

const Slide2 = ({ playAnimations }) => (
  <>
    <ImageContainer
      variants={imageContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
      exit="exit"
    />
    <TextContainer>
      <BodyContainer
        variants={bodyContainerVariants}
        initial="hidden"
        animate={playAnimations ? "visible" : "hidden"}
      >
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="alpacaBody4" />
        </Paragraph>
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="alpacaBody5" />
        </Paragraph>
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="alpacaBody6" />
        </Paragraph>
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="alpacaBody7" />
        </Paragraph>
        <ScrollDownButtonContainer variants={bodyContainerChildVariants}>
          <ScrollDownIcon />
        </ScrollDownButtonContainer>
      </BodyContainer>
    </TextContainer>
  </>
);

Slide2.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default Slide2;
