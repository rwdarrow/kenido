import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactFormContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const NameInput = styled.input.attrs({ type: "text" })`
  color: black;
  font-family: inherit;
  font-size: inherit;
  width: 50%;
  border-style:solid;
  border-radius: 0px;
  
  color: ${(props) => props.hasError ? "darkred" : "black"};
  border-color: ${(props) => props.hasError ? "red" : "transparent"};
  background-color: ${(props) => props.hasError ? "lightcoral" : null};

  &::placeholder {
    color: darkred;
  }
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  color: black;
  font-family: inherit;
  font-size: inherit;
  width: 50%;
  border-style:solid;
  border-radius: 0px;

  color: ${(props) => props.hasError ? "darkred" : "black"};
  border-color: ${(props) => props.hasError ? "red" : "transparent"};
  background-color: ${(props) => props.hasError ? "lightcoral" : null};

  &::placeholder {
    color: darkred;
  }
`;

export const MessageTextArea = styled.textarea`
  color: black;
  font-family: inherit;
  font-size: inherit;
  max-width: 100%;
  border-style:solid;
  border-width: 2px;
  border-radius: 0px;

  color: ${(props) => props.hasError ? "darkred" : "black"};
  border-color: ${(props) => props.hasError ? "red" : "transparent"};
  background-color: ${(props) => props.hasError ? "lightcoral" : null};

  &::placeholder {
    color: darkred;
  }
`;

export const RecaptchaContainer = styled(ReCAPTCHA)`
  margin: 10px;
`;

export const CheckboxContainer = styled.div`
  margin: 10px;
`;

export const AcknowledgementCheckbox = styled.input.attrs({ type: "checkbox" })`

`;

export const PrivacyPolicyLink = styled.a`
  text-decoration: underline;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  font-size: inherit;
  background-color: transparent;
  border-style: solid;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    border-color: black;
    background-color: black;
  }
`;
