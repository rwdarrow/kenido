import React from "react";
import { withRouter } from "react-router-dom";

import { Text } from '../../containers/language';

import CustomButton from "../../components/custom-button/custom-button.component"

import {
  ImageContainer,
  NotFoundContainer,
  TextContainer,
} from "./not-found.styles";

class NotFound extends React.Component {
  render() {
    return (
      <ImageContainer>
        <NotFoundContainer>
          <TextContainer>
            <Text tid="notFound" />
          </TextContainer>
          <CustomButton route={"/"}>
            <Text tid="toHome" />
          </CustomButton>
        </NotFoundContainer>
      </ImageContainer>
    );
  }
}

export default withRouter(NotFound);
