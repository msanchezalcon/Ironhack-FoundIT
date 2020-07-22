import React, { Component } from 'react'
import AppService from '../../../service/AppService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ItemForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            category: ''
            // location: '',
            // imageUrl: '',
            // foundBy: ''
        }
        this.appService = new AppService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.appService
            .newItem(this.state)
            .then(() => this.props.handleItemSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h3 style={{ color: 'lightseagreen' }}>New item</h3>
                <hr></hr>
                <Form className="newForm" onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                        <Form.Text className="text-muted">The devil is in the details ;)</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Category</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.category} name="category" type="text" />
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.location} name="location" type="number" />
                    </Form.Group> */}

                    {/* <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Image (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                    </Form.Group> */}

                    {/* <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Found by</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.foundBy} name="foundBy" type="text" />
                    </Form.Group> */}


                    <Button className="btn btn-light btn-block btn-sm details auth" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default ItemForm