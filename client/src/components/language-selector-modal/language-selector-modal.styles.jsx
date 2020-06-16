import styled from "styled-components";

import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  height: 550px;
  width: 850px;
  border: none;
  background: var(--kn-red);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 0px;
  outline: none;
  padding: 20px;
`;

export const InstructionLabel = styled.p`
  font-size: 35px;
`;

export const Separator = styled.hr`
  color: white;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  background-color: white;
  height: 2px;
  width: 75%;
  margin-bottom: 50px;
`;

export const LanguageSelectorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LanguageOption = styled.button`
  border-style: solid;
  background-color: transparent;
  border-width: 2px;
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
  margin: 50px;
  transition: background-color 300ms linear, border-color 300ms linear;

  &:hover {
    background-color: black;
    border-color: black;
  }
`;
