import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function SaveToPopover() {
    return (
        <div>
            <DropdownButton
            align="end"
        drop="left"
        variant="secondary"
        title={` Drop start`} 
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
        </div>
    )
}
