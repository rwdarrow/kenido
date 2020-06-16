import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { LanguageProvider } from "./containers/language";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import LanguageSelectorModal from "./components/language-selector-modal/language-selector-modal.component";

import HomePage from "./pages/home/home.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import TermsAndCondsPage from "./pages/terms-and-conds/terms-and-conds.component";
import ImpressumPage from "./pages/impressum/impressum.component";
import PrivacyPolicyPage from "./pages/privacy-policy/privacy-policy.component";
import CookiePolicyPage from "./pages/cookie-policy/cookie-policy.component";
import OrderingAndPaymentPage from "./pages/ordering-and-payment/ordering-and-payment.component";
import ReturnsPage from "./pages/returns/returns.component";
import ContactPage from "./pages/contact/contact.component";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  // show the modal if there is not a stored language
  useEffect(() => {
    if (!window.localStorage.getItem("language")) {
      setShowModal(true);
    }
  }, []);

  return (
    <LanguageProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/agb" component={TermsAndCondsPage} />
        <Route exact path="/impressum" component={ImpressumPage} />
        <Route exact path="/datenschutz" component={PrivacyPolicyPage} />
        <Route exact path="/cookies" component={CookiePolicyPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route
          exact
          path="/ordering_and_payment"
          component={OrderingAndPaymentPage}
        />
        <Route exact path="/returns" component={ReturnsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Header />
      <Footer />
      <LanguageSelectorModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </LanguageProvider>
  );
};

export default App;
