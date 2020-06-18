import React from "react";

import Header from "../../components/header/header.component";
import Slideshow from "../../components/slideshow/slideshow.component";
import Footer from "../../components/footer/footer.component";

import { HomePageContainer } from "./home.styles";

const HomePage = () => (
  <>
    <HomePageContainer>
      <Header playAnimation={true} />
      <Slideshow />
    </HomePageContainer>
    <Footer />
  </>
);

export default HomePage;
