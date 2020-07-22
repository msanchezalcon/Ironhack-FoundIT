import React, { Component } from 'react'
import AppService from '../../../service/AppService'

import ItemCard from './Item-card'
import ItemForm from './../Item-form'
import Spinner from '../../ui/Spinner'
// import ProfilePage from '../../pages/profile'


import './Item-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import add from './add.png'
import edit from './edit.svg'



class ItemList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            showModal: false


        }
        this.appService = new AppService()
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


    deleteItem = (id) => {
        this.appService.deleteItem(id)
            .then(() => this.updateItemList())
            .catch(err => console.log(err))
    }

    editItem = (id) => {
        this.appService.editItem(id)
            .then(() => this.updateItemList())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container as="main" className="items-page">
                    {
                        this.props.loggedInUser && <Button variant="link" onClick={() => this.handleModal(true)}><img className="addBtn" src={add} alt="add" /></Button>
                    }
                    {
                        !this.state.items ? <Spinner /> :
                            <Row>
                                {this.state.items.map(elm => <ItemCard key={elm._id} {...elm} />)}
                            </Row>
                    }
                </Container>

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ItemForm {...this.props} handleItemSubmit={this.handleItemSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ItemList
