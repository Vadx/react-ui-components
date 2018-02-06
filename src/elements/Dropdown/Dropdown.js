import React, { Component } from 'react';
import styled from 'styled-components';

const DropDownMainWrap = styled.div`
  border: none;
  border-radius: 2px;
  color: #000;
  position: relative;
  height: 32px;
  margin: 0;
  min-width: 32px;
  padding: 0 16px;
  display: inline-block;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  will-change: box-shadow;
  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 32px;
  vertical-align: middle;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  background: #fff;
  color: #333;
  position: relative;
`;

const DropDownInfo = styled.div`
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  width: 200px;
  padding: 10px;
  color: #333;
  font-size: 14px;
  position: absolute;
  top: 100%;
  margin-top: 5px;
  left: 0;
  text-align: left;
  text-transform: none;
  line-height: 1.2;
  font-weight: 400;
`;

class Dropdown extends Component {
  constructor(props) {
      super(props);
      this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    console.log('isOpened', this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <DropDownInfo>Here is what is shown in dropdown</DropDownInfo>;
    }
    return (
      <DropDownMainWrap onClick={this.toggleState.bind(this)}>
        <span>Its dropdown!</span>
        {dropdownText}
      </DropDownMainWrap>
    );
  }

}

export default Dropdown;
