import React from "react";

import {
  BackgroundContainer,
  BoxContainer,
  TextContainer,
  ReturnToTopButton,
  ReturnToTopIcon,
} from "./with-text-container.styles";

const WithTextContainer = (WrappedComponent, otherProps) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      // create a ref to the text container so that we can control its scroll position programatically
      this.textContainerRef = React.createRef();
      this.handleReturnToTop = this.handleReturnToTop.bind(this);

      this.state = {
        otherProps,
      };
    }

    // when use clicks return to top button, reset text container div scroll position to 0
    handleReturnToTop = () => (this.textContainerRef.current.scrollTop = 0);

    render() {
      return (
        <BackgroundContainer>
          <BoxContainer>
            <ReturnToTopButton onClick={this.handleReturnToTop}>
              <ReturnToTopIcon />
            </ReturnToTopButton>
            <TextContainer ref={this.textContainerRef}>
              <WrappedComponent {...this.otherProps} />
            </TextContainer>
          </BoxContainer>
        </BackgroundContainer>
      );
    }
  };
};

export default WithTextContainer;
