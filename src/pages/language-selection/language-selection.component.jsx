import React, { useEffect } from "react";
import { withLocalize } from "react-localize-redux";
import { withRouter } from "react-router-dom";

import {
  ImageContainer,
  LanguageSelectionContainer,
  LanguageOption,
} from "./language-selection.styles";

const LanguageSelection = ({
  languages,
  setActiveLanguage,
  history,
}) => {
  // get the language from local storage if it exists, otherwise store it
  useEffect(() => {
    const language = window.localStorage.getItem("language");
    console.log(language)

    language
      ? setActiveLanguage(language)
      : window.localStorage.setItem("language", languages[0]);
  }, []);

  return (
    <ImageContainer
      imageUrl="https://firebasestorage.googleapis.com/v0/b/kenido-db.appspot.com/o/lang-select-background.jpg?alt=media&token=bfe5620f-e177-41af-a134-fb33b06b5ab8"
      alt="scarf basket"
    >
      <LanguageSelectionContainer>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            onClick={() => {
              setActiveLanguage(lang.code);
              window.localStorage.setItem("language", lang.code);
              history.push("/");
            }}
          >
            {lang.name}
          </LanguageOption>
        ))}
      </LanguageSelectionContainer>
    </ImageContainer>
  );
};

export default withRouter(withLocalize(LanguageSelection));
