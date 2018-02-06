import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const Nav = styled.nav`

`;

class Menu extends Component {
  render() {
    return (
      <Nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Nav>
    );
  }
}

export default Menu;
