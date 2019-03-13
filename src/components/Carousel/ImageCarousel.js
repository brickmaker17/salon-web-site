import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Woman from '../../images/people/valerie-elash-275588-unsplash.jpg';
import Guy from '../../images/people/caleb-betts-107366-unsplash.jpg';
import Woman1 from '../../images/people/kareya-saleh-239146-unsplash.jpg';

const Container = styled.div`
    height: 833px;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 786px) {
        height: 100%;
    }
`;

export default function ImageCarousel() {
        return (
                <Carousel
                    autoPlay
                    showThumbs={false} 
                    width='50vw'
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    showArrows={false}
                >
                        <Container>
                            <img src={Woman} alt='' />
                            <p className="legend">Legend 1</p>
                        </Container>
                        <Container>
                            <img src={Guy} alt='' />
                            <p className="legend">Legend 2</p>
                        </Container>
                        <Container>
                            <img src={Woman1} alt='' />
                            <p className="legend">Legend 3</p>
                        </Container>
                </Carousel>
        );
};