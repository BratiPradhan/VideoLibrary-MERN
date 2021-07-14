import React from 'react'
import { Accordion, Card, Button, InputGroup, Form, Dropdown } from 'react-bootstrap'

export default function Notes() {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Add Note
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <InputGroup className="mb-3 border">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Styles
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                <Button variant="outline-secondary"><i className="fas fa-bold"></i></Button>
                                <Button variant="outline-secondary"><i className="fas fa-italic"></i></Button>
                                <Button variant="outline-secondary"><i className="fas fa-list-ol"></i></Button>
                                <Button variant="outline-secondary"><i className="fas fa-list-ul"></i></Button>
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <InputGroup.Append className="ml-auto">
                                    <InputGroup.Text>1000</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Form.Control as="textarea" rows={3} />
                            <InputGroup className="mt-2">
                                <Button className="ml-auto mr-1" variant="outline-secondary">Cancel</Button>
                                <Button className="mr-1"  variant="outline-secondary">Save Note</Button>
                            </InputGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
