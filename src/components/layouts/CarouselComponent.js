import React from 'react'
import { Carousel } from 'react-bootstrap'
import { WrapperCarousel, CarouselImage, CarouselCaption } from '../../StyledComponents/layouts/Carousel.style'

import CarouselHome1 from '../../images/carouselhome1.svg'
import CarouselHome2 from '../../images/carouselhome2.svg'
import CarouselHome3 from '../../images/carouselhome3.svg'

export default function CarouselComponent() {
    return (
        <WrapperCarousel>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={CarouselHome1}
              alt="First slide"
            />
            <CarouselCaption>
              <h3>Dream like an artist!!!</h3>
              <p>Learn craftmanship skills and enhance your creativity.</p>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={CarouselHome2}
              alt="Second slide"
            />

            <CarouselCaption>
              <h3>Utilize waste and be the BEST</h3>
              <p>Throwing waste is outdated, learn new skills and be updated.</p>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={CarouselHome3}
              alt="Third slide"
            />

            <CarouselCaption>
              <h3>Decorate your surroundings!!!</h3>
              <p>By learning creative skills you can make your surroundings filled with positive vives.</p>
            </CarouselCaption>
          </Carousel.Item>
        </WrapperCarousel>
    )
}
