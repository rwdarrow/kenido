import React from "react";
import { PropTypes } from "prop-types";
import { withRouter, Link } from "react-router-dom";
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

const sidebarVariants = {
  hidden: {
    x: "-100%",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    x: "0%",
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const sidebarContentVariants = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Sidebar = ({ sidebarHidden, toggleSidebarHidden }) => (
  <SidebarContainer
    variants={sidebarVariants}
    initial={false}
    animate={sidebarHidden ? "hidden" : "visible"}
  >
    <SidebarContentContainer variants={sidebarContentVariants}>
      <CloseButton onClick={toggleSidebarHidden} />
      <Link to="/shop" onClick={toggleSidebarHidden}>
        <SidebarOption variants={childVariants}>
          <Text tid="shop" />
        </SidebarOption>
      </Link>
      <Link to="/about" onClick={toggleSidebarHidden}>
        <SidebarOption variants={childVariants}>
          <Text tid="about" />
        </SidebarOption>
      </Link>
      <Link to="/care" onClick={toggleSidebarHidden}>
        <SidebarOption variants={childVariants}>
          <Text tid="care" />
        </SidebarOption>
      </Link>
      <Link to="/contact" onClick={toggleSidebarHidden}>
        <SidebarOption variants={childVariants}>
          <Text tid="contact" />
        </SidebarOption>
      </Link>
    </SidebarContentContainer>
    <LanguageSelector variants={childVariants} />
  </SidebarContainer>
);

Sidebar.propTypes = {
  sidebarHidden: PropTypes.bool.isRequired,
  toggleSidebarHidden: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarHidden: selectSidebarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarHidden: () => dispatch(toggleSidebarHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
