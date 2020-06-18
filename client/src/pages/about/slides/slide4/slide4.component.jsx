import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../../../containers/language";

import {
  ImageContainer,
  TextContainer,
  TitleContainer,
  Title,
  BodyContainer,
  Paragraph,
  ScrollDownButtonContainer,
  ScrollDownIcon,
} from "./slide4.styles";

import {
  imageContainerVariants,
  titleContainerVariants,
  titleContainerChildVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./slide4.variants";

const Slide1 = ({ playAnimations }) => (
  <>
    <TextContainer>
      <TitleContainer
        variants={titleContainerVariants}
        initial="hidden"
        animate={playAnimations ? "visible" : "hidden"}
      >
        <Title variants={titleContainerChildVariants}>
          <Text tid="about2000sHeadline" />
        </Title>
      </TitleContainer>
      <BodyContainer
        variants={bodyContainerVariants}
        initial="hidden"
        animate={playAnimations ? "visible" : "hidden"}
      >
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="about2000sBody" />
        </Paragraph>
        <ScrollDownButtonContainer variants={bodyContainerChildVariants}>
          <ScrollDownIcon />
        </ScrollDownButtonContainer>
      </BodyContainer>
    </TextContainer>
    <ImageContainer
      variants={imageContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
      exit="exit"
    />
  </>
);

Slide1.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default Slide1;
