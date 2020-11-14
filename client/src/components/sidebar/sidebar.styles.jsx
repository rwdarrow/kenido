import styled from "styled-components";
import { Close } from "@styled-icons/material";

import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.div)`
  background-color: var(--kn-red);
  width: 468px;
  height: 100vh;
  padding: 2em;
  position: absolute;
  z-index: 3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SidebarContentContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50vh;
`;

export const CloseButton = styled(Close)`
  width: 50px;
  cursor: pointer;
  background-color: transparent;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 10vw;
  }
`;

export const SidebarOption = styled(motion.a)`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 50px;

  &:hover {
    color: black;
  }

  @media only screen and (max-width: 600px) {
    font-size: 10vw;

    &:hover {
    }
  }
`;
