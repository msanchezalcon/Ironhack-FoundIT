import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UserService from '../../../service/UserService'
import AppService from '../../../service/AppService'
import './profile.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import ItemCard from './../../items/Item-list/Item-card'
import Spinner from '../../ui/Spinner'
import EditProfileForm from './EditProfileForm'




class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            showModal: false
        }

        this.AppService = new AppService()
    }

    componentDidMount = () => this.updateItemList()


    updateItemList = () => {
        this.appService
            .getAllItems()
            .then(response => {
                console.log('all items', response.data)
                this.setState({ items: response.data })
            })
            .catch(err => console.log(err))
    }




    handleModal = status => this.setState({ showModal: status })

    handleItemSubmit = () => {
        this.handleModal(false)
        this.updateItemList()
    }


    render() {
        console.log('profile page props', this.props)
        console.log('props de usuario', this.props.loggedInUser)

        return (
            <>

                <div className="container">
                    <h2> Hi, {this.props.loggedInUser.name}!</h2>
                    <p><img className="avatarUser" src={this.props.loggedInUser.avatar} alt="user avatar" /></p>
                    <Button className="btn btn-light btn-block btn-sm details auth" onClick={() => this.handleModal(true)}>Edit</Button>
                    <hr></hr>
                    <br></br>
                    <h4>These are your listed items:</h4>
                    <br></br>

                    {
                        !this.state.items ? <Spinner /> :
                            <Row>
                                {this.state.items.map(elm => (elm.foundBy === this.props.loggedInUser._id) ? <ItemCard key={elm._id} {...elm} /> : null
                                )}
                            </Row>
                    }
                </div>




                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <Row>
                            <EditProfileForm {...this.props} handleItemSubmit={this.handleItemSubmit} />
                        </Row>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Profile

