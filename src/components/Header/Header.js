import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../../images/LogoAlphaWhiteText.png';
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
    height: ${props => !props.shrink ? '143px' : '80px'};
    width: 100%;
    align-items: center;
    top: 0;
    position: fixed;
    background-color: ${props => props.headBackgroundColor};
    display: flex;
    margin-right: 26px;
    transition: all .25s ease-in-out;
    z-index: 1;

    @media (max-width: 786px) {
        display: grid;
        grid-template-columns: 1fr 60px;

        z-index: 1;

    }
`
const LogoImage = styled.img`
    top: 0;
    position: sticky;
    height: ${props => !props.shrink ? '108px' : '50px'};
    animation: ${morphIn} 0.25s ease-out;

    @media (max-width: 411px) {
        height: ${props => !props.shrink ? '24vw' : '50px'};

    }
`

const Insignia = styled.img`
    height: 50px;
    animation: ${morphOut} 0.25s ease-out;
`

const SmallNav = styled.div`
    display: flex;
    justify-content: center;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-left: 28px;

    @media (max-width: 786px) {
        margin: 0;
    }
`

export default class Header extends Component {
        state = {
          bacgkroundColor: 'transparent',
          mobile: false,
          shrink: false,

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
        const distanceY = Math.floor(window.pageYOffset) || Math.floor(document.documentElement.scrollTop);

        if (distanceY >= 90 ) {
          this.setState({
              bacgkroundColor: 'black',
              shrink: true,
          })
        } else {
          this.setState({
              bacgkroundColor: 'transparent',
              shrink: false,
          })
        }
      }

      resizeHeaderOnMobile = () => {
        const width = window.innerWidth;

        width < 786 ? this.setState({ mobile: true }) : this.setState({ mobile: false });
      }


    render() {
        const { bacgkroundColor, mobile, shrink } = this.state;

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
                <SmallNav onClick={this.props.drawerClickHandler}>
                    <FaBars />
                </SmallNav>
        } else {
            nav =
                <Navigation />
        }
        return (
            <HeadWrapper headBackgroundColor={bacgkroundColor} shrink={shrink}>
                
                    <StyledLink to='/'>{logos}</StyledLink>
                    {nav}
               
            </HeadWrapper>
        );
    }
}