import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'

import { WrapperVideoListing } from '../../StyledComponents/routes/VideoListing.style'
import CardSlider from '../layouts/CardSlider'
import Filter from '../layouts/Filter'
import { categories, videos } from '../layouts/object'

export default function VideoListing() {
    return (
        <WrapperVideoListing>
            <h1>Home Decor Videos</h1>

            <h3>Courses to get you started</h3>
            <CardSlider/>

            <ul>
                <li>Over 1000 videos on best out of waste creative skills</li>
                <li>Choose from top industry artists across the world</li>
                <li>Learn at your own pace, with lifetime access on mobile and desktop</li>
            </ul>

            <h3>Popular topics</h3>
            <ul>
                {
                    categories[0].topics.map((item,index) => <li key={uuidv4()}>{item}</li>)
                }
            </ul>

            <h3>Popular Artists</h3>
            <ul>
                {
                    videos.map((item,index) => <li key={uuidv4()}>{item.author.name}</li>)
                }
            </ul>

            <h2>All Home Decor videos</h2>
            
            <ul>
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


            <article>
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
