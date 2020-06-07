import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Switch, Route } from "react-router-dom";
import { withLocalize } from "react-localize-redux";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Home from "./pages/home/home.component";
import NotFound from "./pages/not-found/not-found.component";
import LanguageSelection from "./pages/language-selection/language-selection.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSet: true,
      userLocale: undefined,
    };

    const languages = [
      { name: "Deutsch", code: "de" },
      { name: "English", code: "en" },
    ];

    const defaultLanguage =
      window.localStorage.getItem("language") || languages[0];

    this.props.initialize({
      languages,
      options: { renderToStaticMarkup, defaultLanguage },
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/language-selection" component={LanguageSelection} />
          <Route component={NotFound} />
        </Switch>
        <Header />
        <Footer />
      </>
    );
  }
}

export default withLocalize(App);
