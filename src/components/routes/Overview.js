import React from 'react'
import { videos } from '../layouts/object'

export default function Overview() {
    return (
        <div>
            <h1>About this course</h1>
            <p> {
                videos[videos.length - 1].name
            } 
            </p>

            <ul>
                
            </ul>
        </div>
    )
}
