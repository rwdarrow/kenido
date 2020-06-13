import React, { useState } from "react";

import { Text } from "../../containers/language";

import {
  InstagramIcon,
  FacebookIcon,
  FooterContainer,
  FooterBody,
  FooterContent,
  FooterSection,
  FooterSectionHeading,
  FooterSectionItem,
  SocialMediaContainer,
  FooterFineprintContainer,
  MadeWithLove,
  MadeWithLoveLink,
  OpenCloseContainer,
  OpenCloseIcon,
} from "./footer.styles";

const Footer = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <FooterContainer hide={hidden}>
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
            <FooterSectionItem to="/agb">
              <Text tid="termsAndConds" />
            </FooterSectionItem>
            <FooterSectionItem to="/impressum">
              <Text tid="impressum" />
            </FooterSectionItem>
            <FooterSectionItem to="/">
              <Text tid="privacyPolicy" />
            </FooterSectionItem>
            <FooterSectionItem to="/">
              <Text tid="cookiePolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="customerService" />
            </FooterSectionHeading>
            <FooterSectionItem to="/">
              <Text tid="contactUs" />
            </FooterSectionItem>
            <FooterSectionItem to="/">
              <Text tid="ordering" />
            </FooterSectionItem>
            <FooterSectionItem to="/">
              <Text tid="returnPolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="socialMedia" />
            </FooterSectionHeading>
            <SocialMediaContainer>
              <a href="https://www.instagram.com/kenidofashion/">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/kenidofashion">
                <FacebookIcon />
              </a>
            </SocialMediaContainer>
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
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
