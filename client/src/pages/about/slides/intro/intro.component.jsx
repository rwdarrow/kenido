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
  ScrollDownButtonContainer,
  ScrollDownIcon
} from "./intro.styles";

import {
  headlineContainerVariants,
  headlineContainerChildVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./intro.variants";

const IntroSlide = ({ playAnimations }) => (
  <SlideContentContainer>
    <HeadlineContainer
      variants={headlineContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="headline1" />
        &nbsp;&nbsp;
      </Headline>
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="headline2" />
        &nbsp;&nbsp;
      </Headline>
      <Headline variants={headlineContainerChildVariants}>
        <Text tid="headline3" />
      </Headline>
    </HeadlineContainer>
    <BodyContainer
      variants={bodyContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
    >
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="about1" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="about2" />
      </Paragraph>
      <Paragraph variants={bodyContainerChildVariants}>
        <Text tid="about3" />
      </Paragraph>
      <WelcomeContainer variants={bodyContainerChildVariants}>
        <Text tid="welcomeKenido" />
      </WelcomeContainer>
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
