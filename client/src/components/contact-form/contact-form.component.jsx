import React, { useContext, createRef, useState } from "react";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import axios from "axios";

import { LanguageContext } from "../../containers/language";
import { Text } from "../../containers/language";

import WithTextContainer from "../with-text-container/with-text-container.component";

import {
  ContactFormContainer,
  InputContainer,
  NameInput,
  EmailInput,
  MessageTextArea,
  RecaptchaContainer,
  CheckboxContainer,
  AcknowledgementCheckbox,
  PrivacyPolicyLink,
  SubmitButton,
} from "./contact-form.styles";

const ContactForm = () => {
  const language = useContext(LanguageContext);

  const [nameFieldError, setNameFieldError] = useState(false);
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [messageFieldError, setMessageFieldError] = useState(false);

  const nameRef = createRef();
  const emailRef = createRef();
  const messageRef = createRef();
  const recaptchaRef = createRef();
  const checkboxRef = createRef();

  // resets the form so errors do not appear anymore
  const resetForm = () => {
    setNameFieldError(false);
    setEmailFieldError(false);
    setMessageFieldError(false);

    nameRef.current.placeholder = "";
    emailRef.current.placeholder = "";
    messageRef.current.placeholder = "";
  };

  // clears the data from the input fields
  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendData = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message sent.");
        clearForm();
      } else {
        alert("Message failed to send.");
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();

    let isEmailValid = EmailValidator.validate(emailRef.current.value);

    // check to make sure each field is populated, email is valid, and checkbox is checked
    if (
      nameRef.current.value &&
      isEmailValid &&
      messageRef.current.value &&
      checkboxRef.current.checked
    ) {
      sendData();
    } else {
      // apply messages and styling to the relevant fields
      if (!nameRef.current.value) {
        nameRef.current.value = "";
        nameRef.current.placeholder = language.dictionary.nameRequired;
        setNameFieldError(true);
      }

      if (!emailRef.current.value) {
        emailRef.current.value = "";
        emailRef.current.placeholder = language.dictionary.emailRequired;
        setEmailFieldError(true);
      }

      if (emailRef.current.value && !isEmailValid) {
        emailRef.current.value = "";
        emailRef.current.placeholder = language.dictionary.emailInvalid;
        setEmailFieldError(true);
      }

      if (!messageRef.current.value) {
        messageRef.current.value = "";
        messageRef.current.placeholder = language.dictionary.messageRequired;
        setMessageFieldError(true);
      }
    }
  };

  return (
    <ContactFormContainer>
      <h1>
        <Text tid="contactForm" />
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="name">
            <Text tid="nameInputLabel" />*
          </label>
          <NameInput
            name="name"
            type="text"
            ref={nameRef}
            hasError={nameFieldError}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">
            <Text tid="emailInputLabel" />*
          </label>
          <EmailInput
            name="email"
            type="email"
            ref={emailRef}
            hasError={emailFieldError}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="message">
            <Text tid="messageInputLabel" />*
          </label>
          <MessageTextArea
            name="message"
            cols="30"
            rows="10"
            ref={messageRef}
            hasError={messageFieldError}
          />
        </InputContainer>
        <RecaptchaContainer ref={recaptchaRef} sitekey="asdf" />
        <CheckboxContainer>
          <AcknowledgementCheckbox ref={checkboxRef} />
          <Text tid="acknowledgementInputLabel" />
          <Link to="/datenschutz" target="_blank">
            <PrivacyPolicyLink>
              {language.dictionary.privacyPolicyLink}
            </PrivacyPolicyLink>
          </Link>
        </CheckboxContainer>
        <SubmitButton type="submit">
          <Text tid="submitButtonText" />
        </SubmitButton>
      </form>
    </ContactFormContainer>
  );
};

export default WithTextContainer(ContactForm);
