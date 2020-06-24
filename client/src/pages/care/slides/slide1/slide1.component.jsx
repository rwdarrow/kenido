import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../../../containers/language";

import {
  SlideContentContainer,
  HeadlineContainer,
  Headline,
  BodyContainer,
  Paragraph,
  ScrollDownButtonContainer,
  ScrollDownIcon
} from "./slide1.styles";

import {
  headlineContainerVariants,
  headlineContainerChildVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./slide1.variants";

const IntroSlide = ({ playAnimations }) => (
  <SlideContentContainer>
    <HeadlineContainer
      variants={headlineContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="alpacaHeadline1" />
        &nbsp;&nbsp;
      </Headline>
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="alpacaHeadline2" />
      </Headline>
    </HeadlineContainer>
    <BodyContainer
      variants={bodyContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="alpacaBody1" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="alpacaBody2" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="alpacaBody3" />
      </Paragraph>
      <ScrollDownButtonContainer variants={bodyContainerChildVariants}>
        <ScrollDownIcon />
      </ScrollDownButtonContainer>
    </BodyContainer>
  </SlideContentContainer>
);

IntroSlide.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default IntroSlide;
