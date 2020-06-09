import React from "react";
import PropTypes from "prop-types";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleSidebarHidden } from "../../redux/sidebar/sidebar.actions";
import { selectSidebarHidden } from "../../redux/sidebar/sidebar.selectors";

import Sidebar from "../sidebar/sidebar.component";

import {
  HeaderContainer,
  MenuButton,
  LogoContainer,
  LeftContentContainer,
  RightContentContainer,
  ShoppingBagContainer,
  ItemCountContainer,
} from "./header.styles";

const Header = ({ itemCount, sidebarHidden, toggleSidebarHidden }) => (
  <>
    
    <HeaderContainer>
      <LeftContentContainer>
        <MenuButton onClick={toggleSidebarHidden} />
        <LogoContainer to="/">KENIDO</LogoContainer>
      </LeftContentContainer>
      <RightContentContainer>
        <ShoppingBagContainer />
        <ItemCountContainer itemCount={itemCount}>
          {itemCount}
        </ItemCountContainer>
      </RightContentContainer>
    </HeaderContainer>
    <Sidebar />
  </>
);

Header.propTypes = {
  itemCount: PropTypes.number,
  sidebarHidden: PropTypes.bool.isRequired,
  toggleSidebarHidden: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarHidden: selectSidebarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarHidden: () => dispatch(toggleSidebarHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
