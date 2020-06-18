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
} from "./slide3.styles";

import {
  imageContainerVariants,
  titleContainerVariants,
  titleContainerChildVariants,
  bodyContainerVariants,
  bodyContainerChildVariants,
} from "./slide3.variants";

const Slide1 = ({ playAnimations }) => (
  <>
    <ImageContainer
      variants={imageContainerVariants}
      initial="hidden"
      animate={playAnimations ? "visible" : "hidden"}
      exit="exit"
    />
    <TextContainer>
      <TitleContainer
        variants={titleContainerVariants}
        initial="hidden"
        animate={playAnimations ? "visible" : "hidden"}
      >
        <Title variants={titleContainerChildVariants}>
          <Text tid="about90sHeadline" />
        </Title>
      </TitleContainer>
      <BodyContainer
        variants={bodyContainerVariants}
        initial="hidden"
        animate={playAnimations ? "visible" : "hidden"}
      >
        <Paragraph variants={bodyContainerChildVariants}>
          <Text tid="about90sBody" />
        </Paragraph>
        <ScrollDownButtonContainer variants={bodyContainerChildVariants}>
          <ScrollDownIcon />
        </ScrollDownButtonContainer>
      </BodyContainer>
    </TextContainer>
  </>
);

Slide1.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default Slide1;
