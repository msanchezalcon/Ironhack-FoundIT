import React, { Component } from 'react'
import './SearchBar.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'



class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            category: ""
        }
    }

    handleInputChange = e => {
        // e.preventDefault()
        this.props.filterItem(e.target.value)
        this.props.filterCategory(e.target.value)

        this.setState({ [e.target.name]: e.target.value, [e.target.category]: e.target.value })

    }


    render() {
        return (
            <>

                <div className="active-cyan-3 active-cyan-4 mb-4 searchBox">
                    <input class="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Search lost item..." aria-label="Search" />



                    {/* <DropdownButton id="dropdown-item-button dropBtn" name="category" type="select" title="Category" value={this.state.category} onChange={this.handleInputChange}>
                        <Dropdown.Item as="button">clothes</Dropdown.Item>
                        <Dropdown.Item as="button">accessories</Dropdown.Item>
                        <Dropdown.Item as="button">books</Dropdown.Item>
                        <Dropdown.Item as="button">electronics</Dropdown.Item>
                        <Dropdown.Item as="button">other</Dropdown.Item>

                    </DropdownButton> */}

                </div>




            </>
        )
    }
}

export default SearchBar