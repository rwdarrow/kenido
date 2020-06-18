import React from "react";
import { withRouter } from "react-router-dom";

import { Text } from "../../containers/language";

import CustomButton from "../../components/custom-button/custom-button.component";
import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

import {
  NotFoundPageContainer,
  ImageContainer,
  NotFoundContainer,
  TextContainer,
} from "./not-found.styles";

const NotFoundPage = () => (
  <NotFoundPageContainer>
    <Header />
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
    <Footer />
  </NotFoundPageContainer>
);

export default withRouter(NotFoundPage);
