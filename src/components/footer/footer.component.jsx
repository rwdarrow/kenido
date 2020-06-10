import React, { useState } from "react";

import { Text } from "../../containers/language";

import {
  FooterContainer,
  FooterBody,
  FooterContent,
  FooterSection,
  FooterSectionHeading,
  FooterSectionItem,
  FooterFineprintContainer,
  FooterFineprint,
  MadeWithLove,
  MadeWithLoveLink,
  OpenCloseContainer,
  OpenCloseIcon,
} from "./footer.styles";

const Footer = () => {
  const [hidden, setHidden] = useState(true);

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
      <FooterBody hide={hidden}>
        <FooterContent>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="legal" />
            </FooterSectionHeading>
            <FooterSectionItem>
              <Text tid="termsAndConds" />
            </FooterSectionItem>
            <FooterSectionItem>
              <Text tid="impressum" />
            </FooterSectionItem>
            <FooterSectionItem>
              <Text tid="privacyPolicy" />
            </FooterSectionItem>
            <FooterSectionItem>
              <Text tid="cookiePolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="customerService" />
            </FooterSectionHeading>
            <FooterSectionItem>
              <Text tid="contactUs" />
            </FooterSectionItem>
            <FooterSectionItem>
              <Text tid="ordering" />
            </FooterSectionItem>
            <FooterSectionItem>
              <Text tid="returnPolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="socialMedia" />
            </FooterSectionHeading>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="sitemap" />
            </FooterSectionHeading>
          </FooterSection>
        </FooterContent>
        <FooterFineprintContainer>
          <MadeWithLove>
            <Text tid="madeWithLove" />
            <MadeWithLoveLink
              href="https://github.com/rwdarrow"
              target="_blank"
            >
              rwdarrow
            </MadeWithLoveLink>
          </MadeWithLove>
        </FooterFineprintContainer>
        <FooterFineprintContainer>
          <FooterFineprint>
            <Text tid="footerFineprint_1" />
          </FooterFineprint>
          <FooterFineprint>
            <Text tid="footerFineprint_2" />
          </FooterFineprint>
        </FooterFineprintContainer>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
