import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../../images/LogoAlpha.png';
import LogoSymbol from '../../images/LogoAlphaWhite.png';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import { FaBars } from "react-icons/fa";

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

const SmallNav = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`

export default class Header extends Component {
    constructor() {
        super();
    
        this.state = {
          bacgkroundColor: 'transparent',
          height: '143px',
          mobile: false,
          shrink: false,
          show: true

        }
    }

     componentWillUnmount(){
        window.removeEventListener('scroll', this.resizeHeaderOnScroll);
        window.removeEventListener('resize', this.resizeHeaderOnMobile);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
        window.addEventListener('resize', this.resizeHeaderOnMobile);
        const width = window.innerWidth;

        width < 786 ? this.setState({ mobile: true }) : this.setState({ mobile: false });
    }

      resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 90;
    
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

      resizeHeaderOnMobile = () => {
        const width = window.innerWidth;

        width < 786 ? this.setState({ mobile: true }) : this.setState({ mobile: false });
      }


    render() {
        const { bacgkroundColor, height, mobile, shrink } = this.state;

        let logos;
        let nav;
        if(!shrink) {
            logos = 
                <LogoImage shrink={shrink} key='1' src={Logo} alt='Logo' />
        } else {
            logos = 
            
                <Insignia key='2' src={LogoSymbol} alt='symbol' />
            
        }

        if(mobile) {
            nav =
                <SmallNav>
                    <FaBars />
                </SmallNav>
        } else {
            nav =
                <Navigation />
        }

        console.log(this.state.mobile, 'mobile');
        return (
            <HeadWrapper headBackgroundColor={bacgkroundColor} headerHeight={height}>
                
                    <Link to='/'>{logos}</Link>
                    {nav}
               
            </HeadWrapper>
        );
    }
}