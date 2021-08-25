import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { HiMail } from "react-icons/hi";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Header, StyledButton, WrapperForm, WrapperRegister } from '../../StyledComponents/routes/Register.style'
import { Link } from 'react-router-dom';
import { WrapperLogin } from '../../StyledComponents/routes/Login.style';

export default function Login() {

  
    return (
        <WrapperRegister>
            <Header>Log In to Your</Header>

            <hr />

            <WrapperForm>
              
              <Form.Group controlId="formBasicEmail">
                <InputGroup size="lg">
                  <InputGroup.Text><HiMail/></InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <InputGroup size="lg">
                  <InputGroup.Text><FaLock/></InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>
              <StyledButton variant="info" type="submit">
                Log In
              </StyledButton>
            </WrapperForm>
            <hr />

            <p>Don't have an account? <Link to="/register">Sign Up</Link> </p>

        </WrapperRegister>
    )
}
