import styled from "styled-components"
import { Link } from "react-router-dom"

import { Menu } from "@styled-icons/material"

const KN_RED = "#9b0000"

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0 25px 0;
`;

export const LeftContentContainer = styled.span`
  height: 100%;
  width: 468px;
  float: left;
  background-color: ${KN_RED};
`

export const BarsButton = styled(Menu)`
  height: 50px;
  width: 50px;
  color: white;
  cursor: pointer;
  background-color: transparent;
  padding: 5px 5px 5px 5px
`;

export const LogoContainer = styled(Link)`
  font-family: "Times New Roman";
  font-weight: bold;
  font-size: 74px;
  text-decoration: none;
  color: white;
  padding: 25px 5px 5px 5px;
  cursor: pointer;
`

export const RightContentContainer = styled.span`
  height: 100%;
  width: 255px;
  float: right;
  background-color: ${KN_RED};
`