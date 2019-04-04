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
import Backdrop from './components/Backdrop/Backdrop';

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
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  

  render() {
    const { sideDrawerOpen } = this.state;
    console.log(window.location.pathname, 'location');
    return (
      <AppWrapper>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawerOpen? <Navigation
          boxShadow='-3px 0px 5px rgba(0, 0, 0, 0.5)'
          maxWidth='400px'
          background='black'
          height='100%'
          position='fixed'
          direction='column'
          width='70%'
          zIndex='200'
        /> : null}
        {sideDrawerOpen? <Backdrop click={this.drawerToggleClickHandler} /> : null}
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
