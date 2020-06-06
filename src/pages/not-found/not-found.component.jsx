import React from "react";
import { withLocalize } from "react-localize-redux";
import { withRouter } from "react-router-dom";
import { Translate } from "react-localize-redux";

import CustomButton from "../../components/custom-button/custom-button.component"

import notFoundTranslations from "./not-found.translations";

import {
  ImageContainer,
  NotFoundContainer,
  TextContainer,
} from "./not-found.styles";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(notFoundTranslations);
  }

  render() {
    return (
      <ImageContainer>
        <NotFoundContainer>
          <TextContainer>
            <Translate id="notFound" />
          </TextContainer>
          <CustomButton route={"/"}>
            <Translate id="toHome" />
          </CustomButton>
        </NotFoundContainer>
      </ImageContainer>
    );
  }
}

export default withRouter(withLocalize(NotFound));
