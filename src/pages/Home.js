import React, { Component } from "react";
import styled from 'styled-components';

import Header from './layout/Header';
import Button from './../elements/Button';
import Switch from './../elements/Switch';
import Dropdown from './../elements/Dropdown';

const DivInfo = styled.div`
  margin-bottom: 30px;
`;

const DemoRow = styled.div`
  margin-bottom: 35px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 20px 0;
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

class Home extends Component {
  render() {
    return (
      <div>
        <Title>Home Page</Title>
        <DivInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</DivInfo>
        <TitleRow>Buttons</TitleRow>
        <SubTitle>Variations on Material Design buttons.</SubTitle>
        <DemoRow>
          <Button>Normal Button</Button>
          <Button flat>Flat Button</Button>
        </DemoRow>
        <TitleRow>Dropdown</TitleRow>
        <DemoRow>
          <Dropdown/>
        </DemoRow>
        <TitleRow>Switch</TitleRow>
        <DemoRow>
          <Switch />
        </DemoRow>
      </div>
    );
  }
}

export default Home;
