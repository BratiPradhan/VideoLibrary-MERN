import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NavbarComponent } from '../../StyledComponents/layouts/NavBar.style'
import { categories } from './object'

export default function NavBar() {
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
                                    item.topics.map((topic) => <NavLink key={uuidv4()} activeClassName="active" className="dropdown-item" to={`/${item.name}/${topic}`} >{topic}</NavLink>)
                                }
                                {/* <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
                              </DropdownButton>)
                        }
                        {/* <NavLink activeClassName="active" className="dropdown-item" to="/home_decors">Home Decors</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to="/jewellery">Jewellery</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to="/clothing">Clothing</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" to="/toys">Toys</NavLink> */}
                    </NavDropdown>
                </Nav>
                <Form style={{ flex: "1", display: "flex" }} >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="m-sm-2">
                    <NavLink className=" btn btn-outline-info m-1" to="/login">Login</NavLink>
                    <NavLink className=" btn btn-outline-info m-1" to="/register" >SignUp</NavLink>
                </Nav>
                
            </Navbar.Collapse>
        </NavbarComponent>
    )
}
