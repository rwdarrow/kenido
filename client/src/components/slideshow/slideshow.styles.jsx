import styled, { keyframes } from "styled-components";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

import { motion } from "framer-motion";

export const SlideshowContainer = styled.div`
  background-color: black;
  overflow: hidden;
`;

const zoomIn = keyframes`
  0% {
      transform: scale(1,1);
  }
  100% {
      transform: scale(1.1,1.1);
  }
`;

export const PreviewImageContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center top;
  animation: ${zoomIn} 18s forwards;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 60%;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const LeftSlideshowButton = styled(motion.button)`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 500ms linear;
  float: left;

  &:hover {
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const RightSlideshowButton = styled(motion.button)`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 500ms linear;
  float: right;

  &:hover {
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const LeftIcon = styled(ChevronLeft)`
  height: 100%;
  width: 100%;
  background-color: transparent;
`;

export const RightIcon = styled(ChevronRight)`
  height: 100%;
  width: 100%;
  background-color: transparent;
`;
