import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ChevronUp } from "@styled-icons/boxicons-regular/ChevronUp";

import { Instagram } from "@styled-icons/entypo-social/Instagram"
import { Facebook } from "@styled-icons/entypo-social/Facebook"

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


export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease-in-out;
  z-index: ${(props) => props.hide ? 0 : 3}
`;

export const FooterBody = styled.div`
  background-color: black;
  width: 100%;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 300ms ease-in-out;
  transform: ${(props) =>
    props.hide ? "translate(0, 275px)" : "translate(0, 0);"};
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

export const OpenCloseContainer = styled.button`
  height: 45px;
  width: 95px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: transform 300ms ease-in-out, background-color 500ms linear;
  transform: ${(props) =>
    props.hide ? "translate(0, 275px)" : "translate(0, 0)"};

  &:hover {
    background-color: black;
  }
`;

const flipDown = keyframes`
  from {
    transform: rotateX(0deg)
  }

  to {
    transform: rotateX(180deg)
  }
`;

const flipUp = keyframes`
  from {
    transform: rotateX(180deg)
  }

  to {
    transform: rotateX(0deg)
  }
`;

export const OpenCloseIcon = styled(ChevronUp)`
  animation: ${(props) =>
    props.pointUp
      ? css`
          ${flipUp} 300ms linear
        `
      : css`
          ${flipDown} 300ms linear
        `};

  transform: ${(props) => (props.pointUp ? "" : "rotate(180deg)")};
  height: 100%;
  width: 100%;
  background-color: transparent;
`;
