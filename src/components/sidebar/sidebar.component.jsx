import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSidebarHidden } from "../../redux/sidebar/sidebar.selectors";
import { toggleSidebarHidden } from "../../redux/sidebar/sidebar.actions";

import { Text } from "../../containers/language";

import LanguageSelector from "../language-selector/language-selector.component";

import {
  SidebarContainer,
  SidebarContentContainer,
  CloseButton,
  SidebarOption,
} from "./sidebar.styles";

const Sidebar = ({ sidebarHidden, toggleSidebarHidden }) => (
  <SidebarContainer
    initial={false}
    transition={{ ease: "easeIn" }}
    animate={{ x: sidebarHidden ? "-100%" : "0%" }}
  >
    <SidebarContentContainer>
      <CloseButton onClick={toggleSidebarHidden} />
      <SidebarOption to="/shop" onClick={toggleSidebarHidden}>
        <Text tid="shop" />
      </SidebarOption>
      <SidebarOption to="/about" onClick={toggleSidebarHidden}>
        <Text tid="about" />
      </SidebarOption>
      <SidebarOption to="/care" onClick={toggleSidebarHidden}>
        <Text tid="care" />
      </SidebarOption>
      <SidebarOption to="/contact" onClick={toggleSidebarHidden}>
        <Text tid="contact" />
      </SidebarOption>
    </SidebarContentContainer>
    <LanguageSelector />
  </SidebarContainer>
);

const mapStateToProps = createStructuredSelector({
  sidebarHidden: selectSidebarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarHidden: () => dispatch(toggleSidebarHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
