import styled from "styled-components";
import { Link } from "react-router-dom";

import { Instagram } from "@styled-icons/entypo-social/Instagram"
import { Facebook } from "@styled-icons/entypo-social/Facebook"

export const FooterContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const FooterSectionHeading = styled.h1`
  font-size: 20px;
  font-family: "Franklin Gothic";
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 10vw;
  }
`;

export const FooterSectionItem = styled(Link)`
  font-size: 15px;
  margin: 3px;
  font-family: "Franklin Gothic Book";
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--kn-red);
  }

  @media only screen and (max-width: 600px) {
    font-size: 5vw;
    margin: 0.2em;

    &:hover {}
  }
`;

export const FooterFineprintContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 1em;
  }
`;

export const InstagramIcon = styled(Instagram)`
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  margin: 5px;

  @media only screen and (max-width: 600px) {
    margin-top: 0.2em;
  }
`;

export const FacebookIcon = styled(Facebook)`
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  margin: 5px;

  @media only screen and (max-width: 600px) {
    margin-top: 0.2em;
  }
`;


export const SocialMediaContainer = styled.div`
  display: flex;
`;

export const MadeWithLove = styled.div`
  font-size: 20px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 0;
    font-size: 5vw;
  }
`;

export const MadeWithLoveLink = styled.a`
  font-size: 20px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 10px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--kn-red);
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 0.2em;
    font-size: 5vw;

    &:hover {}
  }
`;
