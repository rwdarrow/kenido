import React from "react";
import { Switch, Route } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Home from "./pages/home/home.component";
import NotFound from "./pages/not-found/not-found.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Deutsch", code: "de" },
      ],
      options: { renderToStaticMarkup },
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withLocalize(App);
