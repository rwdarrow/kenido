import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "../languages";

const storedLanguage = JSON.parse(window.localStorage.getItem("language"));

// create the language context  from the stored language, or the default
// if it is undefined
export const LanguageContext = storedLanguage
  ? createContext({
      language: storedLanguage,
      dictionary: dictionaryList[storedLanguage.id],
    })
  : createContext({
      language: languageOptions[0],
      dictionary: dictionaryList[languageOptions[0].id],
    });

// it provides the language context to app
export const LanguageProvider = (props) => {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export const Text = (props) => {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
};
