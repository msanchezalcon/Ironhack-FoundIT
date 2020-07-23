import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { editMode, post } = this.props
        const title = this.titleRef.value
        const body = this.bodyRef.value
        if (editMode) {
            const data = {
                title,
                body
            }
            this.props.dispatch({ type: 'UPDATE', id: post.id, data })
        }
        else {
            const data = {
                id: new Date(),
                title: "",
                message: "",
                editing: false
            }
            this.props.dispatch({ type: 'ADD_POST', data })
        }
    }

    render() {
        const { editMode, post } = this.props
        const pageTitle = editMode ? 'Edit Post' : 'Create Post'
        const buttonTitle = editMode ? 'Update' : 'Post'
        return (
            <div>
                <h1>{pageTitle}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        type="text"
                        ref={input => this.titleRef = input}
                        placeholder="Enter Post Title"
                        defaultValue={post.title}
                    />
                    <textarea
                        required
                        rows="5"
                        ref={input => this.bodyRef = input}
                        cols="28"
                        placeholder="Enter Post"
                        defaultValue={post.body}
                    />
                    <button>{buttonTitle}</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    editMode: PropTypes.bool,
    post: PropTypes.object
}

Form.defaultProps = {
    editMode: false,    // false: Create mode, true: Edit mode
    post: {
        title: "",
        body: ""
    }    // Pass defined Post object in create mode in order not to get undefined objects in 'defaultValue's of inputs.
}

export default Form