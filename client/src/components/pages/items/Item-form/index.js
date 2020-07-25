import React, { Component } from 'react'
import AppService from '../../../../service/AppService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ItemForm extends Component {
    constructor(props) {
        super(props)
        const { itemEdit } = this.props
        this.state = {
            itemEdit: itemEdit ? itemEdit._id : "",
            name: itemEdit ? itemEdit.name : "",
            description: itemEdit ? itemEdit.description : "",
            category: itemEdit ? itemEdit.category : "",
            // location: '',
            imageUrl: itemEdit ? itemEdit.imageUrl : "https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg",
            foundBy: itemEdit ? itemEdit.foundBy : ""
        }
        this.appService = new AppService()
    }


    handleInputChange = e => {
        if (this.state.itemEdit) {
            const { name, value } = e.target
            this.setState({ [name]: value })
        } else {
            const { name, value } = e.target
            this.setState({ [name]: value, foundBy: this.props.loggedInUser._id })
        }
    }


    handleFormSubmit = e => {
        e.preventDefault()
        if (this.state.itemEdit) {
            this.appService.editItem(this.state.itemEdit, this.state)
                .then(() => this.props.handleEditSubmit())
                .catch(err => console.log(err))
        } else {
            this.appService.newItem(this.state)
                .then(() => this.props.handleItemSubmit())
                .catch(err => console.log(err))
        }
    }


    render() {
        // console.log("FORM", this.props)
        // console.log("ID de ITEM", this.props.itemEdit)
        return (
            <>
                {/* form for both creating and editing */}
                <h3 style={{ color: 'lightseagreen' }}>Item info</h3>
                <hr></hr>
                <Form className="newForm" onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                        <Form.Text className="text-muted">Don't be too generic. The devil is in the details ;)</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                        <Form.Text className="text-muted">Color, size, brand, condition... be specific!</Form.Text>
                    </Form.Group>


                    {/* <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.location} name="location" type="number" />
                    </Form.Group> */}

                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label style={{ color: 'SlateBlue' }}>Category</Form.Label>
                        <Form.Control as="select" multiple onChange={this.handleInputChange} value={this.state.category} name="category" type="text">
                            <option>books</option>
                            <option>clothes</option>
                            <option>electronics</option>
                            <option>accessories</option>
                            <option>other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Image (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.File onChange={this.handleInputChange} id="exampleFormControlFile1" label="Image" name="imageUrl" type="text" />
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


