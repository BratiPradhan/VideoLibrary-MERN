import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import VideoCard from '../layouts/VideoCard';
import { CardWrapper } from '../../StyledComponents/routes/Playlists';

export default function Playlists() {
    return (
        <div>
            <ul>
                <li key={uuidv4()}>
                    <p>art <FaPen/> <MdDelete/></p>
                    <CardWrapper>
                        <VideoCard/>
                        <VideoCard/>
                    </CardWrapper>
                </li>
                <li key={uuidv4()}>
                    <p>creativity <FaPen/> <MdDelete/></p>
                    <CardWrapper>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                    </CardWrapper>
                </li>
                <li key={uuidv4()}>
                    <p>web dev <FaPen/> <MdDelete/></p>
                    <CardWrapper>
                        <VideoCard/>
                    </CardWrapper>
                </li>
                <li key={uuidv4()}>
                    <p>crypto <FaPen/> <MdDelete/></p>
                    <CardWrapper>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                    </CardWrapper>
                </li>
            </ul>
        </div>
    )
}
