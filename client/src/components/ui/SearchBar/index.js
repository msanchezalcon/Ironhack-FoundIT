import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    handleInputChange = e => {
        this.props.filterItem(e.target.value)
        this.setState({ [e.target.name]: e.target.value })

    }


    render() {
        return (
            <>

                <div className="active-cyan-3 active-cyan-4 mb-4 searchBox">
                    <input class="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Search lost item..." aria-label="Search" />
                </div>



            </>
        )
    }
}

export default SearchBar