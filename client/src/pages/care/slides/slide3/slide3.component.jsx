import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../../../containers/language";

import {
  SlideContentContainer,
  HeadlineContainer,
  Headline,
  BodyContainer,
  Paragraph,
  ListHeading,
} from "./slide3.styles";

const Slide3 = () => (
  <SlideContentContainer>
    <HeadlineContainer>
      <Headline>
        <Text tid="careHeadline" />
      </Headline>
    </HeadlineContainer>
    <BodyContainer>
      <Paragraph>
        <Text tid="careList1" />
      </Paragraph>
      <ul>
        <li>
          <Text tid="careList1_1" />
        </li>
        <li>
          <Text tid="careList1_2" />
        </li>
        <li>
          <Text tid="careList1_3" />
        </li>
        <li>
          <Text tid="careList1_4" />
        </li>
        <li>
          <Text tid="careList1_5" />
        </li>
      </ul>
      <Paragraph style={{ marginBottom: "1em" }}>
        <Text tid="aboutWool" />
      </Paragraph>
      <ListHeading>
        <Text tid="careList2" />
      </ListHeading>
      <ul>
        <li>
          <Text tid="careList2_1" />
        </li>
        <li>
          <Text tid="careList2_2" />
        </li>
        <li>
          <Text tid="careList2_3" />
        </li>
      </ul>
      <ListHeading>
        <Text tid="careList3" />
      </ListHeading>
      <ul>
        <li>
          <Text tid="careList3_1" />
        </li>
        <li>
          <Text tid="careList3_2" />
        </li>
      </ul>
      <ListHeading>
        <Text tid="careList4" />
      </ListHeading>
      <ul>
        <li>
          <Text tid="careList4_1" />
        </li>
        <li>
          <Text tid="careList4_2" />
        </li>
        <li>
          <Text tid="careList4_3" />
        </li>
      </ul>
      <ListHeading>
        <Text tid="careList5" />
      </ListHeading>
      <ul>
        <li>
          <Text tid="careList5_1" />
        </li>
        <li>
          <Text tid="careList5_2" />
        </li>
      </ul>
    </BodyContainer>
  </SlideContentContainer>
);

Slide3.propTypes = {
  playAnimations: PropTypes.bool.isRequired,
};

export default Slide3;
