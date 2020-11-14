import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { LanguageProvider } from "./containers/language";

import { GlobalStyle } from "./global.styles";

import LanguageSelectorModal from "./components/language-selector-modal/language-selector-modal.component";

import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import AboutPage from "./pages/about/about.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import TermsAndCondsPage from "./pages/terms-and-conds/terms-and-conds.component";
import ImpressumPage from "./pages/impressum/impressum.component";
import PrivacyPolicyPage from "./pages/privacy-policy/privacy-policy.component";
import CookiePolicyPage from "./pages/cookie-policy/cookie-policy.component";
import OrderingAndPaymentPage from "./pages/ordering-and-payment/ordering-and-payment.component";
import ReturnsPage from "./pages/returns/returns.component";
import ContactPage from "./pages/contact/contact.component";
import CarePage from "./pages/care/care.component";

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
        <Route exact path="/shop" component={ShopPage} />       
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/agb" component={TermsAndCondsPage} />
        <Route exact path="/impressum" component={ImpressumPage} />
        <Route exact path="/privacy" component={PrivacyPolicyPage} />
        <Route exact path="/cookies" component={CookiePolicyPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route
          exact
          path="/ordering-and-payment"
          component={OrderingAndPaymentPage}
        />
        <Route exact path="/alpaca-wool-and-care" component={CarePage} />
        <Route exact path="/returns" component={ReturnsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <LanguageSelectorModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </LanguageProvider>
  );
};

export default App;
