import styled, { keyframes } from "styled-components";
import { ChevronDown } from "@styled-icons/boxicons-solid/ChevronDown";

import { motion } from "framer-motion";

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
