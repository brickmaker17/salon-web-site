import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../images/LogoAlpha.png';
import { Link } from "react-router-dom";

// const test = window.addEventListener('scroll', ()=> console.log(Math.ceil(window.scrollY)));    

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
    height: 68px;
    width: 194px;
`
const LinkList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 100%;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

export default class Header extends Component {
    constructor() {
        super();
    
        this.state = {
          bacgkroundColor: 'transparent',
          height: '143px',
          shrink: false

        }
    }

     componentWillUnmount(){
        window.removeEventListener('scroll', this.getWindowHeight);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }

      resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200;
    
        if (distanceY > shrinkOn) {
          this.setState({
              bacgkroundColor: '#0090FF',
              height: '80px',
              shrink: true
          })
        } else {
          this.setState({
              bacgkroundColor: 'transparent',
              height: '143px',
              shrink: false
          })
        }
      }


    render() {
        const { bacgkroundColor, height } = this.state;
        // const Logos = !shrink ? Logo : 
        console.log(this.state, 'class');
        return (
            <HeadWrapper headBackgroundColor={bacgkroundColor} headerHeight={height}>
                <LogoImage src={Logo} alt='' />
                <LinkList>
                    <li>
                        <StyledLink to='/'>ABOUT US</StyledLink>
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
                        <StyledLink to=''>MY ACCOUNT</StyledLink>
                    </li>
                </LinkList>
                <button>Book Now</button>
            </HeadWrapper>
        );
    }
}