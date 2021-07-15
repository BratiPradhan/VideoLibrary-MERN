import React from 'react'
import { useState, useEffect } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

export default function Share() {

    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl('https://react-bootstrap.github.io/components/input-group/')
    }, [url])

    
    return (
        <div>
            <h1>Share this course</h1>


            <InputGroup className="mb-3">
                <FormControl
                value={url}
                disabled
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button onClick={() =>  navigator.clipboard.writeText(url)} variant="outline-secondary" id="button-addon2">
                Copy
                </Button>
            </InputGroup>
        </div>
    )
}
