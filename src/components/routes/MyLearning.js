import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, Routes, Route } from 'react-router-dom'
import Favorites from './Favorites'
import LearningHistory from './LearningHistory'
import Playlists from './Playlists'
// import { FaShare } from 'react-icons/fa'

export default function MyLearning() {
    return (
        <div>
            <h1>My learning</h1>


            <Nav variant="pills" defaultActiveKey="/my-videos/learning-history">
                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/my-videos/learning-history">All videos</NavLink>
                        {/* <Nav.Link href="/home">Active</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/my-videos/playlist">Playlists</NavLink>
                        {/* <Nav.Link eventKey="link-1">Option 2</Nav.Link> */}
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/my-videos/favorite">Favorites</NavLink>
                    </Nav.Item>

                    

                    {/* <Nav.Item>
                        <NavLink activeClassName="active" className="nav-link" to="/video/share">Share <FaShare/></NavLink>
                    </Nav.Item> */}
                </Nav>

                <Routes>
                    <Route path="/learning-history" element={<LearningHistory/>}></Route>
                    <Route path="/playlist" element={<Playlists/>}></Route>
                    <Route path="/favorite" element={<Favorites/>}></Route>
                </Routes>
        </div>
    )
}
