import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Accordion, Card, Button, InputGroup } from 'react-bootstrap'
import { categories } from './object'

export default function Filter() {
    return (
        <aside>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Ratings
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Radio aria-label="Radio button for following rating" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>4.5 & up (454)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>


                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Radio aria-label="Radio button for following rating" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>4.0 & up (927)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Radio aria-label="Radio button for following rating" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>3.5 & up (1,082)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Radio aria-label="Radio button for following rating" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>3.0 & up (1,096)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Video Duration
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following video duration" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>0-1 Hour (353)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following video duration" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>1-3 Hours (651)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following video duration" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>3-6 Hours (90)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following video duration" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>6-17 Hours (38)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following video duration" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>17+ Hours (1)</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>



            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Topic
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>

                            {
                                categories[0].topics.map((item)  => (
                                <InputGroup key={uuidv4()} className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Checkbox for following topic" />
                                    </InputGroup.Prepend>
                                    <InputGroup.Append>
                                        <InputGroup.Text>{item}</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>) )
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>



            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Level
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following level" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>Beginner</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following level" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>All Levels</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following level" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>Intermediate</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following level" />
                                </InputGroup.Prepend>
                                <InputGroup.Append>
                                    <InputGroup.Text>Expert</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </aside>
    )
}