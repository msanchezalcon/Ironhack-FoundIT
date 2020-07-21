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
            category: '',
            // location: '',
            imageUrl: '',
            foundBy: ''
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
                <h3>New item</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                        <Form.Text className="text-muted">The devil is in the details</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.category} name="category" type="text" />
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.location} name="location" type="number" />
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Found by</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.foundBy} name="foundBy" type="text" />
                    </Form.Group>


                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default ItemForm