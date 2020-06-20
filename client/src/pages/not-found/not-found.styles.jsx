import styled from "styled-components";

import notFoundBackground from "../../assets/images/not-found-background.jpg"

export const NotFoundPageContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
  z-index: 0;
`

export const ImageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center 25%;
  background-image: url(${notFoundBackground});
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
`;

export const TextContainer = styled.div`
  font-size: 45px;
  text-align: center;
  margin-bottom: 20px;
`;


