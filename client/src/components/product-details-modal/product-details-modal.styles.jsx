import styled from "styled-components";

import { motion } from "framer-motion";

import { WeightHanging, Clock } from "@styled-icons/fa-solid";
import { Check } from "@styled-icons/boxicons-regular";
import { Close } from "@styled-icons/material";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentContainer = styled(motion.div)`
  display: flex;
  height: 75%;
  width: 75%;
  max-width: 2000px;

  border: none;
  background: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
`;

export const CloseButton = styled(Close)`
  width: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background-color: transparent;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 10vw;
  }
`;

export const SlideshowContainer = styled.div`
  width: 60%;
  display: flex;
  overflow: hidden;

  & > img {
    object-fit: cover;
    object-position: center;
  }
`;

export const SlideshowImage = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: 0.5s;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 40px;
`;

export const NameContainer = styled.div`
  font-family: "Barlow Condensed";
  font-size: 75px;
`;

export const PriceContainer = styled.div`
  font-family: "Barlow Condensed";
  font-weight: bold;
  font-size: 144px;
`;

export const DescriptionContainer = styled.div`
  font-family: "Barlow Condensed";
  font-size: 30px;
`;

export const MiscPropsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const WeightIcon = styled(WeightHanging)`
  height: 100%;
  margin: 10px;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    height: 15vw;
  }
`;

export const CheckIcon = styled(Check)`
  height: 150%;
  margin: 5px;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    height: 15vw;
  }
`;

export const CloseIcon = styled(Close)`
  height: 110%;
  margin: 8px;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    height: 15vw;
  }
`;

export const ClockIcon = styled(Clock)`
  height: 100%;
  margin: 10px;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    height: 15vw;
  }
`;

export const PropertyTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-size: 20px;
  margin: 15px;
  margin-bottom: 0px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  background: transparent;
  margin-top: 30px;
  padding: 15px;
  font-size: 30px;
  transition: all 500ms linear;

  &:hover {
    background-color: white;
    color: black;
  }

  &:disabled {
    background-color:#2b2b2b;
    border-color:#545454;
    color: #545454;
    cursor: default;

    &:hover {}
  }

`;
