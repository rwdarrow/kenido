import styled, { keyframes } from "styled-components" 
import { ChevronDown } from "@styled-icons/boxicons-solid/ChevronDown";

import { motion } from "framer-motion"

export const SlideContentContainer = styled(motion.div)`
  width: 75vw;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadlineContainer = styled(motion.div)`
  display: flex;
  margin-bottom: 50px;
`;

export const Headline = styled(motion.div)`
  font-size: 60px;
`;

export const BodyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled(motion.div)`
  font-size: 30px;
  margin-bottom: 50px;
  text-align: center;
`;

export const WelcomeContainer = styled(motion.div)`
  font-size: 60px;
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
