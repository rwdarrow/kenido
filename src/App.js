import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LanguageProvider } from "./containers/language";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LanguageSelectorModal from "./components/language-selector-modal/language-selector-modal.component";

import HomePage from "./pages/home/home.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import TermsAndCondsPage from "./pages/terms-and-conds/terms-and-conds.component"
import ImpressumPage from "./pages/impressum/impressum.component"
import PrivacyPolicyPage from "./pages/privacy-policy/privacy-policy.component"

const App = () => {
  const storedLanguage = window.localStorage.getItem("language");

  return (
    <LanguageProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/language-select" component={NotFoundPage} />
        <Route exact path="/agb" component={TermsAndCondsPage} />
        <Route exact path="/impressum" component={ImpressumPage} />
        <Route exact path="/datenschutz" component={PrivacyPolicyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Header />
      <Footer />
      {!storedLanguage && (
          <LanguageSelectorModal />
        )}
    </LanguageProvider>
  );
};

export default App;
