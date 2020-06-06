import React from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, route, history }) => (
  <CustomButtonContainer onClick={() => history.push(route)}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  route: PropTypes.string
};

export default withRouter(CustomButton);
