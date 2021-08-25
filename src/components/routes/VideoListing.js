import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'

import { VideosHeader, VideosSubHeader, WrapperVideoListing } from '../../StyledComponents/routes/VideoListing.style'
import CardSlider from '../layouts/CardSlider'
import Filter from '../layouts/Filter'
import { categories, videos } from '../layouts/object'
import Description from '../layouts/Description';
import TopicSlider from '../layouts/TopicSlider';
import { useVideosRoute } from '../../context/RouteVideoListingContext';

export default function VideoListing() {

    const { route } = useVideosRoute()


    return (
        <WrapperVideoListing>
            <VideosHeader>{route === "videos" ? "" : route} Videos</VideosHeader>

            <VideosSubHeader>Courses to get you started</VideosSubHeader>
            <CardSlider/>

            <Description/>

            <VideosSubHeader>Popular topics</VideosSubHeader>
            {/* <ul>
                {
                    categories[0].topics.map((item,index) => <li key={uuidv4()}>{item}</li>)
                }
            </ul> */}
            <TopicSlider/>

            <VideosSubHeader>Popular Artists</VideosSubHeader>
            <ul style={{gridColumn: "2 / -2"}}>
                {
                    videos.map((item,index) => <li key={uuidv4()}>{item.author.name}</li>)
                }
            </ul>

            <VideosSubHeader>All Home Decor videos</VideosSubHeader>
            
            <ul style={{gridColumn: "2 / -2"}}>
                <Button variant="outline-info">Filter</Button>

                <DropdownButton id="dropdown-variants-Info" variant="info" title="Sort">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active> Active Item</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>

                <p>Clear filters</p>

                {/* {Count of all videos which are fetched} */}

                <p>10,000 results</p>
            </ul>


            <article style={{gridColumn: "2 / -2"}}>
                <Filter/>

                <ul>
                    {
                        videos.map((item) => <li key={uuidv4()}>
                            <h4>{item.name}</h4>
                            <p>{item.description.name}</p>
                            <p><small>{item.author.name}</small></p>
                        </li>)
                    }
                </ul>
            </article>
        </WrapperVideoListing>
    )
}
