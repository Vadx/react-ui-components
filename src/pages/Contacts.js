import React, { Component } from "react";
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

class Contacts extends Component {
  render() {
    return (
      <div>
        <Title>Contacts</Title>
        <div>Test by Vadx</div>
      </div>
    );
  }
}

export default Contacts;
