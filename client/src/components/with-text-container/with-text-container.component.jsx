import React from "react";

import { LanguageContext } from "../../containers/language";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";

import {
  PageContainer,
  BackgroundContainer,
  BoxContainer,
  TextContainer,
  ReturnToTopButton,
  ReturnToTopIcon,
} from "./with-text-container.styles";

const boxVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const WithTextContainer = (WrappedComponent, otherProps) => {
  return class extends React.Component {
    static contextType = LanguageContext;

    constructor(props) {
      super(props);

      // create a ref to the text container so that we can control its scroll position programatically
      this.textContainerRef = React.createRef();
      this.handleReturnToTop = this.handleReturnToTop.bind(this);
      this.handleScroll = this.handleScroll.bind(this);

      this.state = {
        otherProps,
        returnToTopHidden: true,
      };
    }

    // when use clicks return to top button, reset text container div scroll position to 0
    handleReturnToTop = () => {
      this.textContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };

    // only show the return to top button when scrolled below starting position
    handleScroll = () => {
      this.setState({
        returnToTopHidden: !this.textContainerRef.current.scrollTop,
      });
    };

    render() {
      let language = this.context;

      return (
        <PageContainer>
          <Header />
          <BackgroundContainer>
            <BoxContainer
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ReturnToTopButton
                hidden={this.state.returnToTopHidden}
                onClick={this.handleReturnToTop}
                title={language.dictionary.returnToTopButtonText}
              >
                <ReturnToTopIcon />
              </ReturnToTopButton>
              <TextContainer
                ref={this.textContainerRef}
                onScroll={this.handleScroll}
              >
                <WrappedComponent {...this.otherProps} />
              </TextContainer>
            </BoxContainer>
          </BackgroundContainer>
          <Footer />
        </PageContainer>
      );
    }
  };
};

export default WithTextContainer;
