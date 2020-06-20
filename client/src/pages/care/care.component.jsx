import React, { useState } from "react";
import { FullPage, Slide } from "react-full-page";


import Header from "../../components/header/header.component";
import Slide1 from "./slides/slide1/slide1.component";
import Footer from "../../components/footer/footer.component";
import ReturnToTopButton from "../../components/return-to-top-button/return-to-top-button.component";

import { slide1Styles, slide2Styles, slide3Styles } from "./care.styles";

const CarePage = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Header />
      <FullPage
        // trigger animation on slides whenever a scroll happens
        beforeChange={() => setAnimate(false)}
        afterChange={() => setAnimate(true)}
      >
        <Slide style={slide1Styles}>
          <Slide1 playAnimations={animate} />
        </Slide>
        <Slide
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Footer />
        </Slide>
      </FullPage>
      <ReturnToTopButton visible={true} />
    </>
  );
};

export default CarePage;
