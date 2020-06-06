import styled from "styled-components"
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

const kn_red = "#9b0000";
const kn_red_highlight = "#6d0101";

export const ImageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`

export const LeftSlideshowButton = styled.div`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: ${kn_red};
  transition: all 300ms ease-in-out;
  float: left;

  &:hover {
    background-color: ${kn_red_highlight};
  }
`;

export const RightSlideshowButton = styled.button`
  height: 95px;
  width: 45px;
  cursor: pointer;
  background-color: ${kn_red};
  transition: all 300ms ease-in-out;
  float: right;

  &:hover {
    background-color: ${kn_red_highlight};
  }
`;

export const LeftIcon = styled(ChevronLeft)`
  height: 100%;
  width: 100%;
  background-color: transparent;
`;

export const RightIcon = styled(ChevronRight)`
  height: 100%;
  width: 100%;
  background-color: transparent;
`;
