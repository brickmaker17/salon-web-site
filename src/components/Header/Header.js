import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../../images/LogoAlpha.png';
import LogoSymbol from '../../images/LogoAlphaWhite.png';
import { Link } from "react-router-dom";
// import { CSSTransition } from 'react-transition-group'; 

const morphIn = keyframes`
    from {
        opacity: 0;
        height: 50px;
    }
    to {
        opacity: 1;
        height: 108px;
    }
`
const morphOut = keyframes`
    from {
        opacity: 0;
        height: 108px;
    }
    to {
        opacity: 1;
        height: 50px;
    }
`

const HeadWrapper = styled.div`
    height: ${props => props.headerHeight};
    align-items: center;
    top: 0;
    position: sticky;
    background-color: ${props => props.headBackgroundColor};
    display: flex;
    transition: all .25s ease-in-out;
`
const LogoImage = styled.img`
    top: 0;
    position: sticky;
    height: ${props => !props.shrink ? '108px' : '50px'};
    animation: ${morphIn} 0.25s ease-out;
`

const Insignia = styled.img`
    height: 50px;
    animation: ${morphOut} 0.25s ease-out;
`

const LinkList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 100%;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export default class Header extends Component {
    constructor() {
        super();
    
        this.state = {
          bacgkroundColor: 'transparent',
          height: '143px',
          shrink: false,
          show: true

        }
    }

     componentWillUnmount(){
        window.removeEventListener('scroll', this.resizeHeaderOnScroll);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }

      resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200;
    
        if (distanceY > shrinkOn) {
          this.setState({
              bacgkroundColor: 'black',
              height: '80px',
              shrink: true,
              show: !this.state.show
          })
        } else {
          this.setState({
              bacgkroundColor: 'transparent',
              height: '143px',
              shrink: false,
              show: false
          })
        }
      }


    render() {
        const { bacgkroundColor, height, shrink } = this.state;

        let logos;
        if(!shrink) {
            logos = 
                <LogoImage shrink={shrink} key='1' src={Logo} alt='Logo' />
        } else {
            logos = 
            
                <Insignia key='2' src={LogoSymbol} alt='symbol' />
            
        }

        console.log(window.innerWidth, 'window');
        return (
            <HeadWrapper headBackgroundColor={bacgkroundColor} headerHeight={height}>
                
                    {logos}
                <LinkList>
                    <li>
                        <StyledLink to='/about'>ABOUT US</StyledLink>
                    </li>
                    <li>
                        <StyledLink to=''>SERVICES</StyledLink>
                    </li>
                    <li>
                        <StyledLink to=''>GIFT CARDS</StyledLink>
                    </li>
                    <li>
                        <StyledLink to=''>LOCATION</StyledLink>
                    </li>
                    <li>
                        <StyledLink to=''>BOOK</StyledLink>
                    </li>
                </LinkList>
            </HeadWrapper>
        );
    }
}