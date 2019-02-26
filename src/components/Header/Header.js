import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/LogoAlpha.png';

const HeadWrapper = styled.div`
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
    return (
        <HeadWrapper>
            <LogoImage src={Logo} alt=""/>
            <LinkList>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>GIFT CARDS</li>
                <li>LOCATIONS</li>
                <li>MY ACCOUNT</li>
            </LinkList>
        </HeadWrapper>
    );
}

export default Header;