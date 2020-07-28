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
                {/* <form> */}
                {/* <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}></input> */}
                <div className="md-form active-purple active-purple-2 mb-3 searchBox">
                    <input class="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Search item" aria-label="Search" />
                </div>
                {/* </form> */}
            </>
        )
    }
}

export default SearchBar