import React, { Component } from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #b2ccff;
  height: 100vh;
`



class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
      </AppWrapper>
    );
  }
}

export default App;
