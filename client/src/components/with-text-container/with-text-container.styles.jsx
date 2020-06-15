import styled from "styled-components";
import { ChevronsUp } from "@styled-icons/boxicons-regular/ChevronsUp"

import * as background from "../../assets/images/wool-texture.jpg";

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url(${background});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  background-color: var(--kn-red);
  width: 950px;
  height: 70vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  z-index: 1;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  width: 950px;
  height: 70vh;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--kn-red);
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export const ReturnToTopButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 100ms linear;
  z-index: 2;
  opacity: ${(props) => props.hidden ? 0 : 100};

  &:hover {
    transform: scale(1.1)
  }
`

export const ReturnToTopIcon = styled(ChevronsUp)`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
`