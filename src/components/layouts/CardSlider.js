import React from 'react'
import Slider from "react-slick";
import { v4 as uuidv4 } from 'uuid';
// import { Link } from 'react-router-dom'

import { videos } from './object'
import VideoCard from './VideoCard'
import { WrapperCardSlider } from '../../StyledComponents/layouts/CardSlider.style'
import { Card, Button } from 'react-bootstrap'

export default function CardSlider() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <WrapperCardSlider {...settings}>
            {
                videos.map((item) =>(
                // <Card key={uuidv4()}>
                //     <Card.Img style={{ height: '70%', width: '100%' }} src="https://via.placeholder.com/450" alt='Video Thumbnail' />

                //     <Card.Body>
                //         <Card.Title>{item.name}</Card.Title>
                //         <Card.Subtitle>{item.author.name}</Card.Subtitle>
                //     </Card.Body>
                // </Card>
                <VideoCard/>
                
                
                ))
            } 
        </WrapperCardSlider>
    )
}
