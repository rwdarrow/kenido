import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { languageOptions } from "../../languages";
import { LanguageContext } from "../../containers/language";

import { SelectorContainer, LanguageOption } from "./language-selector.styles";

const LanguageSelector = ({ variants }) => {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id === event.target.value
    );

    // set selected language by calling context method
    languageContext.setLanguage(selectedLanguage);
    window.localStorage.setItem("language", JSON.stringify(selectedLanguage));
  };

  return (
    <SelectorContainer variants={variants}>
      {languageOptions.map((item) => (
        <LanguageOption
          key={item.id}
          value={item.id}
          onClick={handleLanguageChange}
          selected={item.id === languageContext.language.id}
        >
          {item.id.toUpperCase()}
        </LanguageOption>
      ))}
    </SelectorContainer>
  );
};

LanguageSelector.propTypes = {
  variants: PropTypes.object.isRequired,
};

export default LanguageSelector;
