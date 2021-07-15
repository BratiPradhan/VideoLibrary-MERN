import React from 'react'
import { v4 as uuidv4 } from 'uuid';
// import { Link } from 'react-router-dom'

import { videos } from './object'
import { WrapperCardSlider } from '../../StyledComponents/layouts/CardSlider.style'
import { Card, Button } from 'react-bootstrap'

export default function CardSlider() {
    return (
        <WrapperCardSlider>
            {
                videos.map((item) =>(
                <Card key={uuidv4()}>
                    <Card.Img style={{ height: '70%', width: '100%' }} src="https://via.placeholder.com/450" alt='Video Thumbnail' />

                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>{item.author.name}</Card.Subtitle>
                    </Card.Body>
                </Card>))
            } 
        </WrapperCardSlider>
    )
}
