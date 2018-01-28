import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './elements/Button';
import Header from './pages/layout/Header';

const MainWrap = styled.div`
  text-align: center;
`;


class App extends Component {
  render() {
    return (
      <MainWrap>
        <Header/>
        <div>
          <Button>Normal Button</Button>
          <Button flat>Flat Button</Button>
        </div>
      </MainWrap>
    );
  }
}

export default App;
