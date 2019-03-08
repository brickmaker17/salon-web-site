import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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



const Navigation = () => {
    return (
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
                <StyledLink to='/location'>LOCATION</StyledLink>
            </li>
            <li>
                <StyledLink to=''>BOOK</StyledLink>
            </li>
        </LinkList>
    )
}

export default Navigation;
