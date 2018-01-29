import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './elements/Button';
import Switch from './elements/Switch';
import Header from './pages/layout/Header';

const MainWrap = styled.div`
`;

const ContentPage = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const DemoRow = styled.div`
  margin-bottom: 35px;
`;


const TitleRow = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  color: rgba(0,0,0,.54)
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin: 0 0 20px 0;
  color: rgba(0,0,0,.54)
`;




class App extends Component {
  render() {
    return (
      <MainWrap>
        <Header/>
        <ContentPage>
          <TitleRow>Buttons</TitleRow>
          <SubTitle>Variations on Material Design buttons.</SubTitle>
          <DemoRow>
            <Button>Normal Button</Button>
            <Button flat>Flat Button</Button>
          </DemoRow>
          <TitleRow>Switch</TitleRow>
          <DemoRow>
            <Switch />
          </DemoRow>
        </ContentPage>
      </MainWrap>
    );
  }
}

export default App;
