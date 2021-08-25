import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavbarComponent } from '../../StyledComponents/layouts/NavBar.style'
import { categories } from './object'
import NavLoggedIn from './NavLoggedIn';
import { useVideosRoute } from '../../context/RouteVideoListingContext';

export default function NavBar() {

    const { setRoute } = useVideosRoute()

    return (
        <NavbarComponent bg="light" expand="lg">
            <NavLink className="navbar-brand" to="/">React-Bootstrap</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent: "space-between" }} id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        {
                            categories.map((item) => <DropdownButton
                                as={ButtonGroup}
                                key={uuidv4()}
                                id={`dropdown-button-drop-right`}
                                drop='right'
                                variant="light"
                                title={` ${item.name} `}
                            >
                                {
                                    item.topics.map((topic) => <NavLink onClick={() => setRoute(topic)} key={uuidv4()} activeClassName="active" className="dropdown-item" to={`/videos/${item.name}/${topic}`} >{topic}</NavLink>)
                                }
                              </DropdownButton>)
                        }
                    </NavDropdown>
                </Nav>
                <Form style={{ flex: "1", display: "flex" }} >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="m-sm-2">
                    <NavLink activeClassName="active" className=" btn btn-outline-info m-1" to="/login">Login</NavLink>
                    <NavLink activeClassName="active" className=" btn btn-outline-info m-1" to="/register" >SignUp</NavLink>
                    <NavLoggedIn/>
                </Nav>
                
            </Navbar.Collapse>
        </NavbarComponent>
    )
}
