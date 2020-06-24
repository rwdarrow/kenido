import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --kn-red: #9b0000;
  }

  body {
    font-family: "Prata";
    overflow-x: hidden;
  }

  button {
    font-family: "Prata";
    border:none;
    outline:none;
    border-radius: 0px;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    color: white;
  }

  table {
    border-collapse: collapse;
  }

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  h1 {
    text-align: center;
  }
`;
