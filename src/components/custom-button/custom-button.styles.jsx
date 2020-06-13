import styled from "styled-components";

import { motion } from "framer-motion"

export const CustomButtonContainer = styled(motion.button)`
  background-color: var(--kn-red);
  cursor: pointer;
  font-size: 20px;
  padding: 15px;
  transition: background-color 500ms linear;

  &:hover {
    background-color: black;
  }
`;
