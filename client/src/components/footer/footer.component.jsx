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
            <FooterSectionItem
              to="/agb"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="termsAndConds" />
            </FooterSectionItem>
            <FooterSectionItem
              to="/impressum"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="impressum" />
            </FooterSectionItem>
            <FooterSectionItem
              to="/datenschutz"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="privacyPolicy" />
            </FooterSectionItem>
            <FooterSectionItem
              to="/cookies"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="cookiePolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="customerService" />
            </FooterSectionHeading>
            <FooterSectionItem
              to="/contact"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="contactUs" />
            </FooterSectionItem>
            <FooterSectionItem
              to="/"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="ordering" />
            </FooterSectionItem>
            <FooterSectionItem
              to="/"
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <Text tid="returnPolicy" />
            </FooterSectionItem>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>
              <Text tid="socialMedia" />
            </FooterSectionHeading>
            <SocialMediaContainer>
              <a href="https://www.instagram.com/kenidofashion/">
                <InstagramIcon
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                />
              </a>
              <a href="https://www.facebook.com/kenidofashion">
                <FacebookIcon
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                />
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
              onClick={() => {
                setHidden(!hidden);
              }}
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
