import React, { Component } from 'react'

import AuthService from '../../../service/AuthService'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './signup.css'


class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.handleToast(true, 'Signed up successfully')
                this.props.history.push('/items/all')
            })
            .catch(err => console.log(err.response.data.message))   // Error handling yay!
    }

    render() {
        return (
            <Container as="main">

                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <h3 style={{ color: 'lightseagreen' }}>Sign up</h3>

                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group>
                                <Form.Label style={{ color: 'SlateBlue' }}>Name</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: 'SlateBlue' }}>Username</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: 'SlateBlue' }}>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" />
                                <Form.Text className="text-muted">At least two characters</Form.Text>
                            </Form.Group>

                            <Button type="submit" className="btn btn-light btn-block btn-sm details auth">Sign up</Button>
                        </Form>

                    </Col>
                </Row>


            </Container>
        )
    }
}

export default SignupForm