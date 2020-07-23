import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UserService from '../../../service/UserService'
import AppService from '../../../service/AppService'
import './profile.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import ItemCardProfile from './../../items/Item-list/Item-card-profile'
import Spinner from '../../ui/Spinner'
import EditProfileForm from './EditProfileForm'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            showModal: false,
            id: this.props.loggedInUser._id
        }

        this.appService = new AppService()
        this.userService = new UserService()

    }

    //--------------------------------------------------------------------
    // gets all items from DB and updates list in profile
    componentDidMount = () => {
        if (this.props.loggedInUser) {
            this.updateItemList()
        }
    }
    componentDidUpdate = (prevProps) => {
        if (!prevProps.loggedInUser && this.props.loggedInUser) {
            this.updateItemList()
        }
    }

    updateItemList = () => {
        this.userService
            .getUserItems(this.state.id)
            .then(response => {
                console.log('all items from this user', response.data)
                this.setState({ items: response.data })
            })
            .catch(err => console.log(err))
    }



    //-----------------------------------------------------------------------
    deleteItem = (id) => {
        this.appService.deleteItem(id)
            .then(response => {
                const updateItem = this.state.items.filter(item => item._id !== id)
                this.setState({ items: updateItem })
            })
            .catch(err => console.log(err))
    }
    // TO DO create function for editing item

    //--------------------------------------------------------------------

    //edit profile
    handleModal = () => this.setState({ showModal: true })
    onHide = () => this.setState({ showModal: false })

    handleItemSubmit = () => {
        this.handleModal(false)
        this.updateItemList()
    }



    //TO DO create function for editing user info: editUser(id, data)


    //--------------------------------------------------------------------

    render() {
        console.log('profile page props', this.props)
        console.log('props de usuario en perfil', this.props.loggedInUser)
        console.log('items en estado de perfil', this.state.items)

        const id = this.props.loggedInUser ? this.props.loggedInUser._id : ""
        const name = this.props.loggedInUser ? this.props.loggedInUser.name : ""
        const username = this.props.loggedInUser ? this.props.loggedInUser.username : ""
        const avatar = this.props.loggedInUser ? this.props.loggedInUser.avatar : ""

        return (
            <>

                <div className="container">
                    <h2> Hi, {this.props.loggedInUser.name}!</h2>
                    <p><img className="avatarUser" src={this.props.loggedInUser.imageUrl} alt="user avatar" /></p>
                    <Button className="btn btn-light btn-block btn-sm details auth" onClick={() => this.handleModal(true)}>Edit profile</Button>
                    <hr></hr>
                    <br></br>
                    <h4>These are your listed items:</h4>
                    <br></br>

                    {
                        !this.state.items ? <Spinner /> :
                            <Row>
                                {this.state.items.map(elm => <ItemCardProfile editItem={this.editItem} deleteItem={this.deleteItem} key={elm._id} {...elm} />
                                )}
                            </Row>
                    }
                </div>




                <Modal size="lg" show={this.state.showModal} onHide={this.onHide} >
                    <Modal.Body>
                        <Row>
                            {this.state.showModal ? <EditProfileForm id={id} name={name} username={username} avatar={avatar} closeModal={this.onHide} setTheUser={this.props.setTheUser} /> : null}
                        </Row>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Profile

