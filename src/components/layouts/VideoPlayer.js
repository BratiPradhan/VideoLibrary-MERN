import React from 'react'
import { FaRegStickyNote, FaExpandAlt, FaCompressAlt } from 'react-icons/fa'

import video from '../../videos/652333414.mp4'

import { Player, PlayerButton, PlayerControls, PlayerSlider, PlayerVideo, Progress, ProgressFilled, WrapperVideoPlayer } from '../../StyledComponents/layouts/VideoPlayer.style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SaveToPopver from '../layouts/SaveToPopover'
import { useEffect } from 'react'

export default function VideoPlayer() {
    const [state, setState] = useState({
        volume: '1',
        playbackRate: '1',
        isHover: false
    })


    
    // const [volume, setVolume] = useState('1');
    // const [playbackRate, setPlaybackRate] = useState('1')
    return (
        <WrapperVideoPlayer onSubmit={(e) => e.preventDefault()}>
            <Player onMouseEnter={() => setState({ isHover: true })}  onMouseLeave={() => setState({ isHover: false })}  >
                <PlayerVideo className="player__video viewer" src={video}></PlayerVideo>

                <PlayerControls  isHover={state.isHover} className="player__controls">
                    <Progress isHover={state.isHover} className="progress">
                        <ProgressFilled className="progress__filled">
                        </ProgressFilled>
                    </Progress>
                    <PlayerButton className="player__button toggle" title="Toggle Play">►</PlayerButton>
                    <PlayerSlider onChange={(e) => setState({volume: e.target.value}) } type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={state.volume}/>
                    <PlayerSlider onChange={(e) => setState({playbackRate: e.target.value}) } type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value={state.playbackRate}/>
                    <PlayerButton data-skip="-10" className="player__button">« 10s</PlayerButton>
                    <PlayerButton data-skip="25" className="player__button">25s »</PlayerButton>
                    {/* <Link to="/video/notes"><FaRegStickyNote/></Link>
                    <button><FaExpandAlt/></button>
                    <button><FaCompressAlt/></button> */}
                    


                    {/* Popover should be placed on top right cornner of the video, so that it acts like save to playlist */}
                    {/* <SaveToPopver/> */}


                    
                    
                </PlayerControls>
            </Player>
        </WrapperVideoPlayer>
    )
}
