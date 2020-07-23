import React, { Component } from 'react'

import UserService from '../../../service/UserService'
import './profile.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'


class EditProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            username: this.props.username,
            avatar: this.props.avatar
            //keep adding info from user
        }
        this.userService = new UserService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.userService
            .editUser(this.props.id, this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                // this.props.history.push('/user')
                // this.handleItemSubmit()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log("COMO ES", this.props.setTheUser)
        return (
            <>
                <Col md={{ offset: 3, span: 6 }}>
                    <h3 style={{ color: 'lightseagreen' }}>Edit profile</h3>

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
                            <Form.Label style={{ color: 'SlateBlue' }}>Avatar</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.avatar} name="avatar" type="text" />
                        </Form.Group>

                        <Button type="submit" className="btn btn-light btn-block btn-sm details auth">Submit</Button>
                    </Form>

                </Col>
            </>
        )
    }
}

export default EditProfileForm