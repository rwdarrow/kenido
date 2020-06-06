import styled, { css, keyframes } from "styled-components";
import { ChevronUp } from "@styled-icons/boxicons-regular/ChevronUp";

const kn_red = "#9b0000";
const kn_red_highlight = "#6d0101";

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  background-color: black;
  width: 100%;
  height: 150px;
  transition: all 300ms ease-in-out;
  transform: ${(props) =>
    props.hide ? "translate(0, 150px)" : "translate(0, 0)"};
`;

export const OpenCloseContainer = styled.button`
  height: 45px;
  width: 95px;
  cursor: pointer;
  background-color: ${kn_red};
  transition: all 300ms ease-in-out;
  transform: ${(props) =>
    props.hide ? "translate(0, 150px)" : "translate(0, 0)"};

  &:hover {
    background-color: ${kn_red_highlight};
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
