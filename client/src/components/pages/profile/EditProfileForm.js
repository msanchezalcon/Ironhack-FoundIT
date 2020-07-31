import React, { Component } from 'react'
import UserService from '../../../service/UserService'
import FilesService from '../../../service/FilesService'
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
            avatar: this.props.avatar,
            password: this.props.password,
            message: this.props.messages
        }
        this.userService = new UserService()
        this.filesService = new FilesService()
    }
    handleInputChange = e => {
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value
        this.setState({ [e.target.name]: value })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        const uploadData = new FormData()
        Object.keys(this.state).forEach((key) => {
            uploadData.append(key, this.state[key])
        })
        this.userService
            .editUser(this.props.id, uploadData)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }
    receiveMessages = (id) => {
        const currentMessages = [...this.props.loggedInUser.messages]
        currentMessages.push(id)
        const updatedMessages = [...currentMessages]
        const updateUser = { ...this.props.loggedInUser, messages: updatedMessages }
        this.userService.editUser(this.props.loggedInUser._id, updateUser)
            .then((response) => {
                this.props.setTheUser(response.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log("set the user in profile form", this.props.setTheUser)
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
                        {/* <Form.Group controlId="formGridPassword">
                            <Form.Label style={{ color: 'SlateBlue' }}>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                        </Form.Group> */}
                        {/* <Form.Group>
                            <Form.Label style={{ color: 'SlateBlue' }}>Avatar</Form.Label>
                            <Form.Control onChange={this.handleInputChange} value={this.state.avatar} name="avatar" type="text" />
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label style={{ color: 'SlateBlue' }}>Avatar</Form.Label>
                            <Form.Control name="avatar" type="file" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button type="submit" className="btn btn-light btn-block btn-sm details auth">Submit</Button>
                    </Form>
                </Col>
            </>
        )
    }
}
export default EditProfileForm