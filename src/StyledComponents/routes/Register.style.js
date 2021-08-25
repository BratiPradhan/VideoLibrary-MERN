import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'

export const WrapperRegister = styled.section`
grid-column: 4 / -4;
min-height: 60vh;
padding: 4rem 0rem;
font-size: 1rem;
max-width: 600px;
margin: auto;
`
export const Header = styled.p`
font-weight: 700;
margin: 0rem 1rem;
`

export const WrapperForm = styled(Form)`
margin: 1rem;
`

export const StyledButton = styled(Button)`
width: 100%;
`