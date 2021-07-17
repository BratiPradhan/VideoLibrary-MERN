import React from 'react'
import { Card, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
import { FaRegPlayCircle, FaShare } from 'react-icons/fa'
import { HiOutlineDotsVertical, HiPlusSm, HiStar } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { CardOptionsDropdown, CardText, CardTitle, WrapperVideoCard } from '../../StyledComponents/layouts/VideoCard.style';
import { videos } from './object';

export default function VideoCard() {
    return (
        <WrapperVideoCard>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
            <CardTitle>{videos[videos.length - 1].name}</CardTitle>
            <CardText>{videos[videos.length - 1].author.name}, <i> {videos[videos.length - 1].author.description} </i> </CardText>
            <Button variant="primary"><FaRegPlayCircle/> Play</Button>
            



            <CardOptionsDropdown
            align="end"
        drop="left"
        variant="secondary"
        title={<HiOutlineDotsVertical/>} 
      >
        <Dropdown.Item disabled eventKey="1">Lists</Dropdown.Item>
        <Dropdown.Item eventKey="2">creativity <TiTick/></Dropdown.Item>
        <Dropdown.Item eventKey="3">crypto</Dropdown.Item>
        <Dropdown.Item eventKey="4">operating system</Dropdown.Item>
        <Dropdown.Item eventKey="5">web dev</Dropdown.Item>
    
        <Dropdown.Divider />
        <Dropdown.Item eventKey="6"><FaShare/> Share</Dropdown.Item>
        <Dropdown.Item eventKey="6"><HiPlusSm/> Create New Playlist</Dropdown.Item>
        <Dropdown.Item eventKey="6"><HiStar/> Favorite</Dropdown.Item>
      </CardOptionsDropdown>

        </Card.Body>
        </WrapperVideoCard>
    )
}
