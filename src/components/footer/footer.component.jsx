import React, { useState } from "react";

import {
  FooterContainer,
  FooterContent,
  OpenCloseContainer,
  OpenCloseIcon,
} from "./footer.styles";

const Footer = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <FooterContainer>
      <OpenCloseContainer
        hide={hidden}
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <OpenCloseIcon pointUp={hidden} />
      </OpenCloseContainer>
      <FooterContent hide={hidden}>
        <h1>hi</h1>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
