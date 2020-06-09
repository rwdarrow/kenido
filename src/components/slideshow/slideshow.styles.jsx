import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

import { motion } from "framer-motion"

export const SlideshowContainer  = styled.div`
  position: absolute;
`

export const PreviewImageContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 65%;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSlideshowButton = styled.button`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 300ms ease-in-out;
  float: left;

  &:hover {
    background-color: var(--kn-red-highlight);
  }
`;

export const RightSlideshowButton = styled.button`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 300ms ease-in-out;
  float: right;

  &:hover {
    background-color: var(--kn-red-highlight);
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
