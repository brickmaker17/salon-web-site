import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
    from {
        margin-top: 100%;
        height: 300%;
        opacity: 0;
    }
    to {
        margin-top: 0%;
        height: 100%;
        opacity: 0.6;
    }
`

const textSlider = keyframes`
    from {
        transform: translate3d(0px, 0px, 0px);

    }
    to {
        transform: translate3d(${props => props.move});
    }
`;


const Wrapper = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    width: 39%;
    height: 200px;
    overflow: hidden;
    transition-duration: 2000ms;
`;

const Container = styled.div`
    transform: translate3d(0px, 0px, 0px);
    height: 200px;
    opacity: 1;
    transition-duration: 2000ms;
    animation: ${textSlider} 10s ease-in-out;


    @media (max-width: 786px) {
        height: 100%;
    }
`;

const Text = styled.p`
    font-size: 58px;
    animation: ${slideUp} 2s ease-in;
    margin-top: 0%;


`;
// transition: opacity .75s ease-in-out 1s,transform .5s ease-in-out 1s;
// transition-property: opacity, transform;
// transition-duration: 0.75s, 0.5s;
// transition-timing-function: ease-in-out, ease-in-out;
// transition-delay: 1s, 1s;



export default function TextCarousel() {
        return (
            <Wrapper>
                <Container move='0px, 0px, 0px'>
                    <Text>Legend 1</Text>
                </Container>
                <Container move='-422px, 0px, 0px'>
                    <p>Legend 2</p>
                </Container>
                <Container>
                    <p>Legend 3</p>
                </Container>
            </Wrapper>
        );
};