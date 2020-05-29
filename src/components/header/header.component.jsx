import React from "react";

import {
  HeaderContainer,
  BarsButton,
  LogoContainer,
  LeftContentContainer,
  RightContentContainer
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LeftContentContainer>
      <BarsButton />
      <LogoContainer to="/">KENIDO</LogoContainer>
    </LeftContentContainer>
    <RightContentContainer>

    </RightContentContainer>
  </HeaderContainer>
);

export default Header;
