import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, route, history }) => {
  const location = useLocation();

  return (
    <CustomButtonContainer
      // only do the initial animation when the home page mounts
      initial={location.pathname === "/" ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      onClick={() => history.push(route)}
    >
      {children}
    </CustomButtonContainer>
  );
};

CustomButton.propTypes = {
  children: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default withRouter(CustomButton);
