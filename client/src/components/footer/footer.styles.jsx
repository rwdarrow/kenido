import styled from "styled-components";
import { Link } from "react-router-dom";

import { Instagram } from "@styled-icons/entypo-social/Instagram"
import { Facebook } from "@styled-icons/entypo-social/Facebook"

export const FooterContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-evenly;
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
`;

export const FooterSectionItem = styled(Link)`
  font-size: 15px;
  margin: 3px;
  font-family: "Franklin Gothic Book";
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--kn-red);
  }
`;

export const FooterFineprintContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const InstagramIcon = styled(Instagram)`
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  margin: 5px;
`;

export const FacebookIcon = styled(Facebook)`
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  margin: 5px;
`;


export const SocialMediaContainer = styled.div`
  display: flex;
`;

export const MadeWithLove = styled.div`
  font-size: 15px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 10px;
`;

export const MadeWithLoveLink = styled.a`
  font-size: 15px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 10px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--kn-red);
  }
`;
