import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const urlBooking = 'https://squareup.com/appointments/book/CZK4CPP5N8PHB/mr-e-z-hair-desgin-cutz-clolorz-curlz-west-valley-city-ut';

const LinkList = styled.ul`
    position: ${props => props.position};
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-around;
    list-style-type: none;
    width: 100%;
    background: ${props => props.background};
    z-index: ${props => props.zIndex};
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const StyledExternalLink = styled.a`
    text-decoration: none;
    color: white;
`


const Navigation = props => {
    const { direction, zIndex, position } = props;
    return (
        <LinkList
            position={position}
            direction={direction}
            zIndex={zIndex}
        >
            <li>
                <StyledLink to='/about'>ABOUT US</StyledLink>
            </li>
            <li>
                <StyledLink to='/services'>SERVICES</StyledLink>
            </li>
            <li>
                <StyledLink to=''>GIFT CARDS</StyledLink>
            </li>
            <li>
                <StyledLink to='/location'>LOCATION</StyledLink>
            </li>
            <li>
                <StyledExternalLink href={urlBooking}>BOOK</StyledExternalLink>
            </li>
        </LinkList>
    );
};

export default Navigation;
