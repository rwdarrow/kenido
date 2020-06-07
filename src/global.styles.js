import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --kn-red: #9b0000;
    --kn-red-highlight: #6d0101;
  }

  body {
    font-family: "Prata";
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
`