import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from './pages/layout/Header';

const MainWrap = styled.div`
`;

const ContentPage = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MainWrap>
          <Header/>
          <ContentPage>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/contacts" component={Contacts}/>
          </ContentPage>
        </MainWrap>
      </HashRouter>
    );
  }
}

export default App;
