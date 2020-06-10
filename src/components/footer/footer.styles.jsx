import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ChevronUp } from "@styled-icons/boxicons-regular/ChevronUp";

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    props.hide ? "translate(0, 275px)" : "translate(0, 0)"};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
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
`;

export const MadeWithLove = styled.text`
  font-size: 20px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 15px;
`;

export const MadeWithLoveLink = styled.a`
  font-size: 20px;
  font-family: "Franklin Gothic Book";
  margin-bottom: 15px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--kn-red);
  }
`;

export const FooterFineprint = styled.text`
  font-size: 10px;
  font-family: "Franklin Gothic Book";
`;

export const OpenCloseContainer = styled.button`
  height: 45px;
  width: 95px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 300ms ease-in-out;
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
