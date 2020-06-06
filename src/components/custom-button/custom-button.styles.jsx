import styled from "styled-components"

const kn_red = "#9b0000";
const kn_red_highlight = "#6d0101";

export const CustomButtonContainer = styled.button`
  background-color: ${kn_red};
  cursor: pointer;
  font-size: 20px;
  padding: 15px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${kn_red_highlight};
  }
`;