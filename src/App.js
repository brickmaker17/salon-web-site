import React, { Component } from 'react';
import Header from './components/Header/Header';
import styled, { keyframes } from 'styled-components'

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`

const AppWrapper = styled.div`
  background-color: #b2ccff;
  animation: .5s ${slideInFromLeft} ease-out;
  height: 200vh;
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
