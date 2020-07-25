import React, { Component } from 'react'

import AppService from '../../../../service/AppService'
import UserService from '../../../../service/UserService'

import './items-user.css'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import ItemCardProfile from './Item-card-profile'
import Spinner from '../../../ui/Spinner'
import ItemForm from './../../items/Item-form'


class ItemsUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            showModal: false,
            id: props.loggedInUser.loggedInUser._id,
            id_item: null
        }

        this.appService = new AppService()
        this.userService = new UserService()

    }

    componentDidMount = () => {
        if (this.props.loggedInUser) {
            this.updateItemList()
        }
    }


    updateItemList = () => {
        this.userService
            .getUserItems(this.state.id)
            .then(response => {
                console.log('all items user in profile', response.data)
                this.setState({ items: response.data })
            })
            .catch(err => console.log(err))
    }

    deleteItem = (id) => {
        this.appService.deleteItem(id)
            .then(response => {
                const updateItem = this.state.items.filter(item => item._id !== id)
                this.setState({ items: updateItem })
            })
            .catch(err => console.log(err))
    }


    handleModal = (status, id_item) => {
        this.setState({ showModal: status, id_item: id_item })

    }

    handleItemSubmit = () => {
        this.handleModal(false)
        this.updateItemList()
    }

    render() {
        // console.log('items user page props', this.props)
        // console.log('estado de items user', this.state.items)
        // console.log('estado de id User', this.state.id)
        // console.log('props de usuario en items user', this.props.loggedInUser)
        // console.log('state id item', this.state.id_item)
        const itemEdit = this.state.id_item ? this.state.items.filter(item => item._id === this.state.id_item)[0] : {}
        return (
            <>
                {
                    !this.state.items ? <Spinner /> :
                        <Row>
                            {this.state.items.map(elm => <ItemCardProfile handleModal={this.handleModal} editItem={this.editItem} deleteItem={this.deleteItem} key={elm._id} {...elm} />
                            )}
                        </Row>
                }


                <Modal size="lg" show={this.state.showModal}
                    onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ItemForm itemEdit={itemEdit} {...this.props} handleEditSubmit={this.handleItemSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ItemsUser