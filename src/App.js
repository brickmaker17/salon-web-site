import React, { Component } from 'react';
import Header from './components/Header/Header';
import Bg from './images/Bg.png';
import styled, { keyframes } from 'styled-components';
import { Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`

const AppWrapper = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  background-size: cover;
  animation: .5s ${slideInFromLeft} ease-out;
  height: 200vh;
`



export default class App extends Component {

  render() {
    return (
      <AppWrapper>
        <Header />
        <Route path='/about' component={AboutUs} />
        <Route path='/services' component={Services} />
      </AppWrapper>
    );
  }
}
