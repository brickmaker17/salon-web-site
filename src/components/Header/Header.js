import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/LogoAlpha.png';
import { Link } from "react-router-dom";

const test = window.addEventListener('scroll', ()=> console.log(Math.ceil(window.scrollY)));    

const HeadWrapper = styled.div`
    top: 0;
    position: sticky;
    background-color: cadetblue;
    display: flex;
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

const Header = () => {
    console.log(test, 'window');
    return (
        <HeadWrapper>
            <LogoImage src={Logo} alt='' />
            <LinkList>
                <li>
                    <Link to='/'>ABOUT US</Link>
                </li>
                <li>
                    <Link to=''>SERVICES</Link>
                </li>
                <li>
                    <Link to=''>GIFT CARDS</Link>
                </li>
                <li>
                    <Link to=''>LOCATION</Link>
                </li>
                <li>
                    <Link to=''>MY ACCOUNT</Link>
                </li>
            </LinkList>
            <button>Book Now</button>
        </HeadWrapper>
    );
}

export default Header;