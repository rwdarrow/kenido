import React, { useState, useContext } from "react";
import ReactModal from "react-modal";

import { languageOptions } from "../../languages";
import { LanguageContext } from "../../containers/language";

import {
  ModalContentContainer,
  InstructionLabel,
  Separator,
  LanguageSelectorContainer,
  LanguageOption,
} from "./language-selector-modal.styles";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    position: "absolute",
    top: "25vh",
    left: "15vw",
    right: "15vw",
    bottom: "25vh",
    border: "none",
    background: "var(--kn-red)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "0px",
    outline: "none",
    padding: "20px",
  },
};

const LanguageSelectorModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (language) => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id.toString() === language
    );

    // set selected language by calling context method
    languageContext.setLanguage(selectedLanguage);
    window.localStorage.setItem("language", JSON.stringify(selectedLanguage));
    setModalOpen(false);
  };

  return (
    <ReactModal
      id="languageModal"
      contentLabel="Choose language"
      isOpen={modalOpen}
      style={styles}
    >
      <ModalContentContainer>
        <InstructionLabel>Please choose your language</InstructionLabel>
        <InstructionLabel>Bitte wählen Sie Ihre Sprache</InstructionLabel>
        <Separator />
        <LanguageSelectorContainer>
          <LanguageOption onClick={() => handleLanguageChange("en")}>
            English
          </LanguageOption>
          <LanguageOption onClick={() => handleLanguageChange("de")}>
            Deutsch
          </LanguageOption>
        </LanguageSelectorContainer>
      </ModalContentContainer>
    </ReactModal>
  );
};

export default LanguageSelectorModal;
