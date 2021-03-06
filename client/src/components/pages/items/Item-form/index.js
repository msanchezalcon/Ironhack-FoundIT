import React, { Component } from 'react'
import AppService from '../../../../service/AppService'
import FilesService from '../../../../service/FilesService'
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
            //location: itemEdit ? itemEdit.location : {type:"", coordinates:[]},
            imageUrl: itemEdit ? itemEdit.imageUrl : "",
            //foundBy: itemEdit ? itemEdit.foundBy : ""
        }
        this.appService = new AppService()
        this.filesService = new FilesService()    // CLOUDINARYCONFIG  
    }
    handleInputChange = e => {
        if (this.state.itemEdit) {
            const value = e.target.type === "file" ? e.target.files[0] : e.target.value
            this.setState({ [e.target.name]: value })
            // this.setState({ [name]: value })
        } else {
            const value = e.target.type === "file" ? e.target.files[0] : e.target.value
            this.setState({ [e.target.name]: value, foundBy: this.props.loggedInUser._id })
        }
    }
    handleFormSubmit = e => {
        e.preventDefault()
        const uploadData = new FormData()
        Object.keys(this.state).forEach((key) => {
            uploadData.append(key, this.state[key])
        })
        if (this.state.itemEdit) {
            this.appService.editItem(this.state.itemEdit, uploadData)
                .then(() => this.props.handleEditSubmit())
                .catch(err => console.log(err))
        } else {
            this.appService.newItem(uploadData)
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
                        <Form.Text className="text-muted">Item name and brand</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                        <Form.Text className="text-muted">Color, size, condition... be specific!</Form.Text>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Location</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.location.coordinates} placeholder="lat, lng" name="location" type="float" />
                        {/* <Form.Control onChange={this.handleInputChange} value={this.state.location.coordinates} placeholder="lng" name="location" type="float" /> */}
                    {/* </Form.Group> */}
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
                    {/* <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Image</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                    </Form.Group> */}
                    {/* // CLOUDINARYCONFIG   */}
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="imageUrl" type="file" onChange={this.handleInputChange} />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label style={{ color: 'SlateBlue' }}>Image (URL)</Form.Label>
                        <Form.File onChange={this.handleInputChange} value={this.state.imageUrl} id="exampleFormControlFile1" label="imageUrl" name="imageUrl" type="text" />
                    </Form.Group> */}
                    <Button className="btn btn-light btn-block btn-sm details auth" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}
export default ItemForm
