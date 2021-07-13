import React from 'react'
import { Nav } from 'react-bootstrap'

import VideoPlayer from '../layouts/VideoPlayer'

import { WrapperVideo, WrapperDashboard } from '../../StyledComponents/routes/Video.style'
import { Route, Routes, NavLink } from 'react-router-dom'
import Overview from './Overview'
import Notes from './Notes'
import Announcements from './Announcements'
import YourProgress from './YourProgress'
import RateThisCourse from './RateThisCourse'

export default function Video() {
    return (
        <WrapperVideo>
            <VideoPlayer/>

            <WrapperDashboard>
                <Nav variant="pills" defaultActiveKey="/video/">
                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/video/">Overview</NavLink>
                        {/* <Nav.Link href="/home">Active</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="#notes">Notes</NavLink>
                        {/* <Nav.Link eventKey="link-1">Option 2</Nav.Link> */}
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/video/announcements">Announcements</NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/video/your-progress">Your Progress</NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/video/rate-this-course">Rate this course</NavLink>
                    </Nav.Item>
                </Nav>

                <Routes>
                    <Route path="/" element={<Overview/>}></Route>
                    <Route path="#notes" element={<Notes/>}></Route>
                    <Route path="/announcements" element={<Announcements/>}></Route>
                    <Route path="/your-progress" element={<YourProgress/>}></Route>
                    <Route path="/rate-this-course" element={<RateThisCourse/>}></Route>
                </Routes>
            </WrapperDashboard>
        </WrapperVideo>
    )
}
