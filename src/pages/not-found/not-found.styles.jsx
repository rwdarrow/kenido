import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center 25%;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/kenido-db.appspot.com/o/not-found-background.jpg?alt=media&token=ba62a109-0d40-4aed-bda1-f96325d5bb2a");

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


