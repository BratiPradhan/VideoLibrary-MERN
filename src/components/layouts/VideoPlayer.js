import React from 'react'
import { FaRegStickyNote, FaExpandAlt, FaCompressAlt } from 'react-icons/fa'

import video from '../../videos/652333414.mp4'

import { WrapperVideoPlayer } from '../../StyledComponents/layouts/VideoPlayer.style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SaveToPopver from '../layouts/SaveToPopover'

export default function VideoPlayer() {
    const [volume, setVolume] = useState('1');
    const [playbackRate, setPlaybackRate] = useState('1')
    return (
        <WrapperVideoPlayer>
            <video className="player__video viewer" src={video}></video>

            <div className="player__controls">
                <div className="progress">
                    <div className="progress__filled">
                    </div>
                </div>
                <button className="player__button toggle" title="Toggle Play">►</button>
                <input onChange={(e) => setVolume(e.target.value) } type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={volume}/>
                <input onChange={(e) => setPlaybackRate(e.target.value) } type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value={playbackRate}/>
                <button data-skip="-10" className="player__button">« 10s</button>
                <button data-skip="25" className="player__button">25s »</button>
                <Link to="/video/notes"><FaRegStickyNote/></Link>
                <button><FaExpandAlt/></button>
                <button><FaCompressAlt/></button>
                


                {/* Popover should be placed on top right cornner of the video, so that it acts like save to playlist */}
                <SaveToPopver/>


                
                
            </div>
        </WrapperVideoPlayer>
    )
}
