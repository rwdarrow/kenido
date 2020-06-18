import styled from "styled-components" 
import { ArrowToTop } from "@styled-icons/boxicons-regular/ArrowToTop";

import { motion } from "framer-motion"

export const ReturnToTopContainer = styled(motion.div)`
  background-color: transparent;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

export const Button = styled.button`
  background-color: transparent;
  height: 50px;
`

export const ArrowToTopIcon = styled(ArrowToTop)`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.2);
  }
` 