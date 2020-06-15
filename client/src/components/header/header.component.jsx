import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { toggleSidebarHidden } from "../../redux/sidebar/sidebar.actions";

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

const leftContainerVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

const rightContainerVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
    },
  },
};

const Header = ({ itemCount, toggleSidebarHidden }) => (
  <>
    <HeaderContainer>
      <LeftContentContainer
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <MenuButton onClick={toggleSidebarHidden} />
        <LogoContainer to="/">KENIDO</LogoContainer>
      </LeftContentContainer>
      <RightContentContainer
        variants={rightContainerVariants}
        initial="hidden"
        animate="visible"
      >
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
  toggleSidebarHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarHidden: () => dispatch(toggleSidebarHidden()),
});

export default connect(null, mapDispatchToProps)(Header);
