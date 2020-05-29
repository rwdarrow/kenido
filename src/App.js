import React from 'react';
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

import Home from "./pages/home/home.component"

import './App.css';

const App = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
