import styled from 'styled-components'
import { Card, DropdownButton } from "react-bootstrap";

export const WrapperVideoCard = styled(Card)`
width: 14.4rem;
font-size: 1rem;
position: relative;
`

export const CardTitle = styled(Card.Title)`
font-size: 1rem;
font-weight: 700;
`

export const CardText = styled(Card.Text)`
font-weight: 500;
/* font-size: 1rem; */
`


export const CardOptionsDropdown = styled(DropdownButton)`
position: absolute;
top: 0.5rem;
right: 0.5rem;
border: 0;
`