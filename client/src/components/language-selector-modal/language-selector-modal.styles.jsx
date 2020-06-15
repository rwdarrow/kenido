import styled from "styled-components";

import { motion } from "framer-motion";

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
`

export const LanguageOption = styled.button`
  border-style: solid;
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
`