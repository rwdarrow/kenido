import React, { useState } from "react";
import { FullPage, Slide } from "react-full-page";

import Header from "../../components/header/header.component";
import IntroSlide from "./slides/intro/intro.component";
import Slide1 from "./slides/slide1/slide1.component";
import Slide2 from "./slides/slide2/slide2.component";
import Slide3 from "./slides/slide3/slide3.component";
import Slide4 from "./slides/slide4/slide4.component";
import Slide5 from "./slides/slide5/slide5.component";
import Footer from "../../components/footer/footer.component";

import { introSlideStyles, slide1Styles, slide2Styles } from "./about.styles";
import ReturnToTopButton from "../../components/return-to-top-button/return-to-top-button.component";

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Header />
      <FullPage
        // trigger animation on slides whenever a scroll happens
        beforeChange={() => setAnimate(false)}
        afterChange={() => setAnimate(true)}
      >
        <Slide style={introSlideStyles}>
          <IntroSlide playAnimations={animate} />
        </Slide>
        <Slide style={slide1Styles}>
          <Slide1 playAnimations={animate} />
        </Slide>
        <Slide style={slide2Styles}>
          <Slide2 playAnimations={animate} />
        </Slide>
        <Slide style={slide1Styles}>
          <Slide3 playAnimations={animate} />
        </Slide>
        <Slide style={slide2Styles}>
          <Slide4 playAnimations={animate} />
        </Slide>
        <Slide
          style={{ ...introSlideStyles, backgroundColor: "var(--kn-red)" }}
        >
          <Slide5 playAnimations={animate} />
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

export default AboutPage;
