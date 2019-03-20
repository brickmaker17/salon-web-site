import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const urlBooking = 'https://squareup.com/appointments/book/CZK4CPP5N8PHB/mr-e-z-hair-desgin-cutz-clolorz-curlz-west-valley-city-ut';

const LinkList = styled.ul`
    position: ${props => props.position};
    box-shadow: ${props => props.boxShadow};
    right: 0;
    margin: 0;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-around;
    list-style-type: none;
    max-width: ${props => props.maxWidth};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
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
const ListItem =styled.li`
    text-align: center;
`


const Navigation = props => {
    const { background, boxShadow, direction, maxWidth, height, zIndex, position, width } = props;
    return (
        <LinkList
            background={background}
            boxShadow={boxShadow}
            maxWidth={maxWidth}
            height={height}
            position={position}
            direction={direction}
            width={width}
            zIndex={zIndex}
        >
            <ListItem>
                <StyledLink to='/about'>ABOUT US</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to='/services'>SERVICES</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to=''>GIFT CARDS</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to='/location'>LOCATION</StyledLink>
            </ListItem>
            <ListItem>
                <StyledExternalLink href={urlBooking}>BOOK</StyledExternalLink>
            </ListItem>
        </LinkList>
    );
};

export default Navigation;
