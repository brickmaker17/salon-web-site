import React, { Component } from 'react';
import Header from './components/Header/Header';
import Bg from './images/Bg.png';
import styled, { keyframes } from 'styled-components';
import { Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import Home from './pages/home';
import Location from './pages/location';
import Navigation from './components/Navigation/Navigation';

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
`

const Container = styled.div`
    display: flex;
    padding: 170px 47px;
`;


export default class App extends Component {

  

  render() {
    return (
      <AppWrapper>
        <Header />
        <Navigation
          position='fixed'
          direction='column'
          zIndex='100'
        />
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/services' component={Services} />
          <Route path='/location' component={Location} />
        </Container>
      </AppWrapper>
    );
  }
}
