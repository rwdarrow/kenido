import React from "react";

import { Text } from "../../containers/language";
import LanguageSelector from "../language-selector/language-selector.component";

import {
  InstagramIcon,
  FacebookIcon,
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterSectionHeading,
  FooterSectionItem,
  SocialMediaContainer,
  FooterFineprintContainer,
  MadeWithLove,
  MadeWithLoveLink,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
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
        <FooterSectionItem to="/privacy">
          <Text tid="privacyPolicy" />
        </FooterSectionItem>
        <FooterSectionItem to="/cookies">
          <Text tid="cookiePolicy" />
        </FooterSectionItem>
      </FooterSection>
      <FooterSection>
        <FooterSectionHeading>
          <Text tid="customerService" />
        </FooterSectionHeading>
        <FooterSectionItem to="/contact">
          <Text tid="contactUs" />
        </FooterSectionItem>
        <FooterSectionItem to="/ordering_and_payment">
          <Text tid="ordering" />
        </FooterSectionItem>
        <FooterSectionItem to="/returns">
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
      <FooterSection>
        <FooterSectionHeading>
          <Text tid="language" />
        </FooterSectionHeading>
        <LanguageSelector />
      </FooterSection>
    </FooterContent>
    <FooterFineprintContainer>
      <MadeWithLove>
        <Text tid="madeWithLove" />
        <MadeWithLoveLink href="https://github.com/rwdarrow" target="_blank">
          rwdarrow
        </MadeWithLoveLink>
      </MadeWithLove>
    </FooterFineprintContainer>
  </FooterContainer>
);

export default Footer;
