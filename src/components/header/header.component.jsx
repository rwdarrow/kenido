import React from "react";
import PropTypes from "prop-types";

import {
  HeaderContainer,
  MenuButton,
  LogoContainer,
  LeftContentContainer,
  RightContentContainer,
  ShoppingBagContainer,
  ItemCountContainer,
} from "./header.styles";

const Header = ({ itemCount }) => {
  return (
    <HeaderContainer>
      <LeftContentContainer>
        <MenuButton />
        <LogoContainer to="/">KENIDO</LogoContainer>
      </LeftContentContainer>
      <RightContentContainer>
        <ShoppingBagContainer />
        <ItemCountContainer itemCount={itemCount}>
          {itemCount}
        </ItemCountContainer>
      </RightContentContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  itemCount: PropTypes.number
};

export default Header;
