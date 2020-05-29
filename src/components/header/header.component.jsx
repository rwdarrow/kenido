import React from "react";
import PropTypes from "prop-types";

import {
  HeaderContainer,
  MenuButton,
  LogoContainer,
  LeftContentContainer,
  RightContentContainer,
  ShoppingBagContainer,
  ItemCountContainer
} from "./header.styles";

const Header = ({ itemCount }) => (
  <HeaderContainer>
    <LeftContentContainer>
      <MenuButton />
      <LogoContainer to="/">KENIDO</LogoContainer>
    </LeftContentContainer>
    <RightContentContainer>
      <ShoppingBagContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </RightContentContainer>
  </HeaderContainer>
);

Header.propTypes = {
  language: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired
};

export default Header;
