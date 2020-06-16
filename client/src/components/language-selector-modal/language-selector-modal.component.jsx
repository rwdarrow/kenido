import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { AnimatePresence } from "framer-motion";

import { languageOptions } from "../../languages";
import { LanguageContext } from "../../containers/language";

import {
  ModalContainer,
  ModalContentContainer,
  InstructionLabel,
  Separator,
  LanguageSelectorContainer,
  LanguageOption,
} from "./language-selector-modal.styles";

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const modalVariants = {
  hidden: {
    x: "-100vw",
    transition: {
      type: "spring",
    },
  },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
    },
  },
};

const LanguageSelectorModal = ({ showModal, setShowModal }) => {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (language) => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id.toString() === language
    );

    // set selected language by calling context method
    languageContext.setLanguage(selectedLanguage);
    window.localStorage.setItem("language", JSON.stringify(selectedLanguage));
    setShowModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <ModalContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalContentContainer variants={modalVariants}>
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
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

LanguageSelectorModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default LanguageSelectorModal;
