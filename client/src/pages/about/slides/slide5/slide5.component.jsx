import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../../../containers/language";

import {
  SlideContentContainer,
  HeadlineContainer,
  Headline,
  BodyContainer,
  Paragraph,
  WelcomeContainer,
} from "./slide5.styles";

import {
  headlineContainerVariants,
  headlineContainerChildVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./slide5.variants";

const IntroSlide = ({ playAnimations }) => (
  <SlideContentContainer>
    <HeadlineContainer
      variants={headlineContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="about2019Headline1" />
        &nbsp;&nbsp;
      </Headline>
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="about2019Headline2" />
      </Headline>
    </HeadlineContainer>
    <BodyContainer
      variants={bodyContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="about2019Body1" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="about2019Body2" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="aboutMotto" />
      </Paragraph>
      <WelcomeContainer variants={bodyContainerChildVariants}>
        <Text tid="welcomeFamily" />
      </WelcomeContainer>
    </BodyContainer>
  </SlideContentContainer>
);

IntroSlide.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default IntroSlide;
