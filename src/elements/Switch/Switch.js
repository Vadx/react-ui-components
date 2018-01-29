import React, { Component } from 'react';
import styled from 'styled-components';

const SwitchWrap = styled.div`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 14px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const SliderSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DDDFE1;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 14px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 0px;
    bottom: -2px;
    background-color: #BBBFC4;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  }
`;

const Input = styled.input`
  display:none;
  &:checked + ${SliderSwitch} {
    background-color: rgba(45, 168, 222, 0.5);
  }
  &:checked + ${SliderSwitch}:before {
    background-color: #2EA8DE;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .15);

    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;


class Switch extends Component {
  render() {
    return (
      <SwitchWrap>
        <Label>
          <Input type="checkbox" />
          <SliderSwitch/>
        </Label>
      </SwitchWrap>
    );
  }
}

export default Switch;
