import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { HiMail } from "react-icons/hi";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Header, StyledButton, WrapperForm, WrapperRegister } from '../../StyledComponents/routes/Register.style'
import { Link } from 'react-router-dom';

export default function Register() {

  
    return (
        <WrapperRegister>
            <Header>Sign Up and Start Learning!</Header>

            <hr />

            <WrapperForm>
              <Form.Group controlId="formBasicInput">
                {/* <Form.Label>Email address</Form.Label> */}
                <InputGroup size="lg">
                  <InputGroup.Text><FaUserAlt/></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                  />
                </InputGroup>
                {/* <Form.Control type="email" placeholder={`${<HiMail/>} email`}  /> */}
              </Form.Group>
              
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <InputGroup size="lg">
                  <InputGroup.Text><HiMail/></InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                  />
                </InputGroup>
                {/* <Form.Control type="email" placeholder={`${<HiMail/>} email`}  /> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <InputGroup size="lg">
                  <InputGroup.Text><FaLock/></InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>
              <StyledButton variant="info" type="submit">
                Sign Up
              </StyledButton>
            </WrapperForm>
            <hr />

            <p>Already have an account? <Link to="/login">Log In</Link> </p>

        </WrapperRegister>
    )
}
