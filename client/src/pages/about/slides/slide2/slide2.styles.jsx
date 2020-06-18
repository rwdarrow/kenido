import styled, { keyframes } from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-solid/ChevronDown";

import { motion } from "framer-motion";

import * as aboutImage from "../../../../assets/images/about-80s.jpg";

export const ImageContainer = styled(motion.div)`
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${aboutImage});
`;

export const TextContainer = styled(motion.div)`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`

export const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled(motion.div)`
  font-size: 45px;
`;

export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled(motion.div)`
  font-size: 25px;
  margin-bottom: 50px;
  text-align: center;
`;

export const ScrollDownButtonContainer = styled(motion.button)`
  height: 55px;
  background-color: transparent;
`;

const bounce = keyframes`
  0% {
    transform: translateY(0) 
  }

  50% {
    transform: translateY(20px) 
  }

  100% {
    transform: translateY(0) 
  }
`;

export const ScrollDownIcon = styled(ChevronDown)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  animation: ${bounce} 3s ease infinite;
`;