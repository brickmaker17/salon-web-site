import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../components/Carousel/ImageCarousel';

const Container = styled.div`
    height: 75vh;
    justify-content: flex-start;
    padding-left: 9vw;
    
    @media (max-width: 786px) {
        height: 65vh;
    }
`;

export default function Home() {
    return (
        <Container>
            <ImageCarousel />
        </Container>
    )
}