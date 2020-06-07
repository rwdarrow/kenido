import React from "react";
import { Switch, Route } from "react-router-dom";

import { LanguageProvider } from './containers/language';

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Home from "./pages/home/home.component";
import NotFound from "./pages/not-found/not-found.component";

const App = () => (
  <LanguageProvider>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
    <Header />
    <Footer />
  </LanguageProvider>
);

export default App;
