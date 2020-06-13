import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion"

import { Menu } from "@styled-icons/material";
import { ShoppingBag } from "@styled-icons/feather/ShoppingBag";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0 25px 0;
  position: absolute;
`;

export const LeftContentContainer = styled(motion.div)`
  height: 100%;
  width: 468px;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: var(--kn-red);
`;

export const MenuButton = styled(Menu)`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
`;

export const LogoContainer = styled(Link)`
  font-family: "Times New Roman";
  font-weight: bold;
  font-size: 65px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;

export const RightContentContainer = styled(motion.button)`
  height: 100%;
  width: 140px;
  float: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  background-color: var(--kn-red);
  transition: all 500ms linear;

  &:hover {
    background-color: black;
  }
`;

export const ShoppingBagContainer = styled(ShoppingBag)`
  height: 70%;
  background-color: transparent;
`;

export const ItemCountContainer = styled.span`
  font-family: "Prata";
  font-size: 25px;
  display: ${(props) => (props.itemCount > 0 ? "inline" : "none")};
`;
