import React from 'react'
import { FaPlay, FaStar, FaInfinity } from "react-icons/fa";
import { DescBody, ListItem, WrapperBadge, WrapperDescription } from '../../StyledComponents/layouts/Description.style'

export default function Description() {
    return (
    <WrapperDescription>
        <ListItem>
            <WrapperBadge>
                <FaPlay/>
            </WrapperBadge>
            <DescBody>Over 1000 videos on best out of waste creative skills</DescBody>
        </ListItem>
        <ListItem>
            <WrapperBadge>
                <FaStar/>
            </WrapperBadge>
            <DescBody>Choose from top industry artists across the world</DescBody>
        </ListItem>
        <ListItem>
            <WrapperBadge>
                <FaInfinity/>
            </WrapperBadge>
            <DescBody>Learn at your own pace, with lifetime access on mobile and desktop</DescBody>
        </ListItem>
    </WrapperDescription>
    )
}
