import styled from "styled-components"
import { Link } from "react-router-dom"
import { Close } from "@styled-icons/material"

import { motion } from "framer-motion"

export const SidebarContainer = styled(motion.div)`
  background-color: var(--kn-red);
  width: 468px;
  height: 100vh;
  padding: 25px;
`

export const SidebarContentContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 100px;
`

export const CloseButton = styled(Close)`
  width: 50px;
  cursor: pointer;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: black;
  }
`

export const SidebarOption = styled(Link)`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 40px;

  &:hover {
    color: black;
  }
`