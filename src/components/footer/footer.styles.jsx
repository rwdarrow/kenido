import styled, { css } from "styled-components";
import { ChevronUp } from "@styled-icons/boxicons-regular/ChevronUp";

import { KN_RED, FlipDown, FlipUp } from "../../assets/style-constants";

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
  transition: transform 300ms ease-in-out;
  transform: ${props => props.hide ? "translate(0, 0)" : "translate(0, 150px)"}
`;

export const OpenCloseContainer = styled.div`
  height: 45px;
  width: 95px;
  cursor: pointer;
  background-color: ${KN_RED};
  transition: transform 300ms ease-in-out;
  transform: ${props => props.hide ? "translate(0, 0)" : "translate(0, 150px)"}
`;

export const OpenCloseIcon = styled(ChevronUp)`
  animation: ${(props) =>
    props.pointUp
      ? css`
          ${FlipDown} 300ms linear
        `
      : css`
          ${FlipUp} 300ms linear
        `};

  transform: ${(props) => (props.pointUp ? "rotate(180deg)" : "")};
  height: 100%;
  width: 100%;
  color: white;
  background-color: transparent;
`;
