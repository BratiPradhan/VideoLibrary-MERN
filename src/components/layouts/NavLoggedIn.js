import React from 'react'

import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { NavUserButton } from '../../StyledComponents/layouts/NavLoggedIn.style';

export default function NavLoggedIn() {
    return (
        <div>
            
            <OverlayTrigger 
      placement="bottom"
      overlay={
        <Tooltip >
          <p>This is a Tooltip</p>
        </Tooltip>
      }
    >
      <NavUserButton variant="info">BP</NavUserButton>
    </OverlayTrigger>
        </div>
    )
}
