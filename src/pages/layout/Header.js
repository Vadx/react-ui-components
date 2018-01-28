import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import Menu from './Menu';

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

const HeaderWrap = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 30px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;

  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);
`;

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//
//   to {
//     transform: rotate(360deg);
//   }
// `;

const Icon = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: -10px 0;
`;

//animation: ${rotate360} 20s linear infinite;

class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <Icon />
        <Title>
          Simle React UI Components
        </Title>
        <Menu/>
      </HeaderWrap>
    );
  }
}

export default Header;
