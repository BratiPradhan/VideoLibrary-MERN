import React from 'react'

import video from '../../videos/652333414.mp4'

import { WrapperVideoPlayer } from '../../StyledComponents/layouts/VideoPlayer.style'

export default function VideoPlayer() {
    return (
        <WrapperVideoPlayer>
            <video className="player__video viewer" src={video}></video>

            <div className="player__controls">
                <div className="progress">
                    <div className="progress__filled">
                    </div>
                </div>
                <button className="player__button toggle" title="Toggle Play">►</button>
                <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1"/>
                <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value="1"/>
                <button data-skip="-10" className="player__button">« 10s</button>
                <button data-skip="25" className="player__button">25s »</button>
            </div>
        </WrapperVideoPlayer>
    )
}
