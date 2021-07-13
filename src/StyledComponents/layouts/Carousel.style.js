import { Carousel } from 'react-bootstrap'
import styled from 'styled-components';

export const WrapperCarousel = styled(Carousel)`
/* grid-column: 2  / -2; */
/* height: 50vh; */

`

export const CarouselImage = styled.img`
height: 50vh;
/* width: 100vh; */
`

export const CarouselCaption = styled(Carousel.Caption)`
color: ${props => props.theme.secondary.yellow};
font-weight: 700;
bottom: 0;
left: 35%;
`

